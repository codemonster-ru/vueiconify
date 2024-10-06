import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'url';
import { rmSync, existsSync, unlinkSync } from 'node:fs';

const config = {
    dev: {
        name: 'dev',
        entry: resolve(__dirname, './src/main.ts'),
        fileName: 'main.ts',
    },
    docs: {
        name: 'docs',
        entry: resolve(__dirname, './src/main.ts'),
        fileName: 'main.ts',
    },
    index: {
        name: 'index',
        entry: resolve(__dirname, './src/lib/index.ts'),
        fileName: 'index.ts',
        formats: ['es', 'umd'],
    },
};

const currentConfig = config[process.env.LIB_NAME];

if (currentConfig === undefined) {
    throw new Error('LIB_NAME is not defined or is not valid');
}

const removeUnnecessary = () => {
    if (process.env.LIB_NAME === 'docs') {
        if (existsSync('dist/lib')) rmSync('dist/lib', { recursive: true, force: true });
    } else {
        if (existsSync('dist/main.d.ts')) unlinkSync('dist/main.d.ts');
    }
};

let viteConfig = {
    define: {
        '__APP_VERSION__': JSON.stringify(process.env.npm_package_version),
    },
    plugins: [
        vue(),
        dts({
            afterBuild: () => {
                setTimeout(removeUnnecessary, 50);
            },
        }),
    ],
    resolve: {
        alias: [
            { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
        ],
    },
};

if (process.env.LIB_NAME !== 'docs') {
    viteConfig.build = {
        emptyOutDir: process.env.LIB_NAME === 'docs' || process.env.LIB_NAME === 'index',
        cssCodeSplit: true,
        lib: {
            ...currentConfig,
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue',
                },
            },
        },
    };
}

// https://vitejs.dev/config/
export default defineConfig(viteConfig);