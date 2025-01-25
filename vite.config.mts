import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'url';
import { rmSync, existsSync, unlinkSync } from 'node:fs';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import path from 'path';
import fs from 'fs';

let entry: string = './src/lib/index.ts';

if (process.env.NODE_ENV === 'development') {
    entry = './src/main.ts';
}

const removeUnnecessaryFiles = () => {
    return {
        name: 'remove-files',
        writeBundle(outputOptions, inputOptions) {
            const outDir = outputOptions.dir;

            ['main.d.ts', 'App.vue.d.ts'].map((file) => {
                const filePath = path.resolve(outDir, file);

                fs.rm(filePath, () => console.log(`Deleted ${filePath}`));
            });
        },
    };
};

export default defineConfig({
    define: {
        '__APP_VERSION__': JSON.stringify(process.env.npm_package_version),
    },
    plugins: [
        vue(),
        dts(),
        libInjectCss(),
        removeUnnecessaryFiles(),
    ],
    resolve: {
        alias: [
            { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
        ],
    },
    build: {
        emptyOutDir: true,
        cssCodeSplit: true,
        lib: {
            name: 'index',
            entry: resolve(__dirname, entry),
            fileName: 'index.ts',
            formats: ['es', 'umd'],
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue',
                },
            },
        },
    },
});