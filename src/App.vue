<template>
    <main class="showcase">
        <section class="hero">
            <div class="hero__copy">
                <p class="eyebrow">Vue icon library</p>
                <h1>VueIconify</h1>
                <p class="lead">
                    Compact Vue 3 icon pack with a single `VueIconify` component and a single `size` prop across the
                    whole API.
                </p>

                <div class="hero__actions">
                    <button class="action-card" type="button" @click="copySnippet(installSnippet, 'install')">
                        <span class="action-card__label">Install</span>
                        <code>{{ installSnippet }}</code>
                    </button>
                    <button class="action-card" type="button" @click="copySnippet(importSnippet, 'import')">
                        <span class="action-card__label">Import</span>
                        <code>{{ importSnippet }}</code>
                    </button>
                </div>
            </div>

            <div class="hero__preview">
                <div class="hero__badge">v{{ version }}</div>
                <div class="preview-orbit">
                    <div class="preview-orbit__ring preview-orbit__ring_large"></div>
                    <div class="preview-orbit__ring preview-orbit__ring_small"></div>
                    <div class="preview-orbit__core">
                        <VueIconify :icon="icons.circleNotch" :size="80" spin />
                    </div>
                    <div class="preview-orbit__node preview-orbit__node_top">
                        <VueIconify :icon="icons.sun" :size="28" />
                    </div>
                    <div class="preview-orbit__node preview-orbit__node_right">
                        <VueIconify :icon="icons.magnifyingGlass" :size="28" />
                    </div>
                    <div class="preview-orbit__node preview-orbit__node_bottom">
                        <VueIconify :icon="icons.moon" :size="28" />
                    </div>
                    <div class="preview-orbit__node preview-orbit__node_left">
                        <VueIconify :icon="icons.house" :size="28" />
                    </div>
                </div>
            </div>
        </section>

        <section class="usage">
            <article class="panel">
                <div class="panel__header">
                    <h2>Generic Component</h2>
                    <button class="copy-button" type="button" @click="copySnippet(genericSnippet, 'generic')">
                        {{ copyLabel('generic') }}
                    </button>
                </div>
                <pre><code>{{ genericSnippet }}</code></pre>
            </article>
        </section>

        <section class="catalog">
            <div class="section-heading">
                <div>
                    <p class="eyebrow">Active redesign</p>
                    <h2>{{ showcaseIconEntries.length }} icons currently visible</h2>
                </div>
                <p class="section-heading__text">
                    The full pack is hidden for now. Showcase only includes icons that are already accepted or actively
                    being redrawn, so visual review stays focused.
                </p>
            </div>

            <div class="catalog-groups">
                <article
                    v-for="entry in showcaseIconEntries"
                    :key="entry.icon"
                    class="catalog-group catalog-group_tile"
                >
                    <div class="catalog-group__header">
                        <p class="eyebrow">{{ entry.status === 'approved' ? 'Approved' : 'In Progress' }}</p>
                        <h3>{{ getDisplayIconName(entry.icon) }}</h3>
                    </div>

                    <button
                        class="icon-card"
                        type="button"
                        @click="copySnippet(getIconSnippet(entry.icon), entry.icon)"
                    >
                        <span class="icon-card__preview">
                            <VueIconify :icon="getIconToken(entry.icon)" :size="38" />
                        </span>
                        <span class="icon-card__meta">{{ copyLabel(entry.icon) }}</span>
                    </button>
                </article>
            </div>
        </section>
    </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { VueIconify, icons } from '@/lib';
import { showcaseIconEntries, type IconName } from '@/lib/iconMeta';

type CopyKey = 'install' | 'import' | 'generic' | string;

const version = __APP_VERSION__;
const copiedKey = ref<CopyKey | null>(null);

const installSnippet = 'npm install @codemonster-ru/vueiconify';
const importSnippet = "import { VueIconify, icons } from '@codemonster-ru/vueiconify';";
const genericSnippet = `<VueIconify :icon="icons.arrowLeft" :size="24" />`;

const toKebabCase = (iconName: string) => {
    return iconName.replace(/[A-Z]/g, char => `-${char.toLowerCase()}`);
};

const getIconToken = (iconName: IconName) => {
    return icons[iconName] ?? toKebabCase(iconName);
};

const getIconSnippet = (iconName: string) => {
    return `<VueIconify :icon="icons.${iconName}" :size="24" />`;
};

const getDisplayIconName = (iconName: IconName) => {
    return toKebabCase(iconName);
};

const copyLabel = (key: CopyKey) => {
    return copiedKey.value === key ? 'Copied' : 'Copy';
};

const copySnippet = async (snippet: string, key: CopyKey) => {
    await navigator.clipboard.writeText(snippet);
    copiedKey.value = key;

    window.setTimeout(() => {
        if (copiedKey.value === key) {
            copiedKey.value = null;
        }
    }, 1200);
};
</script>

<style lang="scss" scoped>
:global(body) {
    margin: 0;
    background: radial-gradient(circle at top, rgba(234, 120, 50, 0.16), transparent 28%),
        linear-gradient(180deg, #f7f1e7 0%, #f1ede3 100%);
    color: #1f2328;
    font-family: 'Avenir Next', Avenir, 'Segoe UI', sans-serif;
}

:global(*) {
    box-sizing: border-box;
}

:global(button),
:global(code),
:global(pre) {
    font: inherit;
}

.showcase {
    --surface: rgba(255, 250, 243, 0.88);
    --surface-strong: rgba(255, 248, 238, 0.96);
    --border: rgba(50, 42, 30, 0.12);
    --accent: #cb5f2e;
    --accent-dark: #8b3b1c;
    --muted: #655b4f;

    width: min(1200px, calc(100% - 32px));
    margin: 0 auto;
    padding: 40px 0 64px;
}

.hero,
.usage,
.catalog {
    margin-bottom: 28px;
}

.hero {
    display: grid;
    grid-template-columns: minmax(0, 1.2fr) minmax(320px, 0.8fr);
    gap: 24px;
    align-items: stretch;
}

.hero__copy,
.hero__preview,
.panel,
.icon-card {
    border: 1px solid var(--border);
    border-radius: 28px;
    background: var(--surface);
    backdrop-filter: blur(12px);
    box-shadow: 0 16px 40px rgba(89, 58, 32, 0.08);
}

.hero__copy {
    padding: 32px;
}

.hero__preview {
    position: relative;
    display: grid;
    place-items: center;
    min-height: 320px;
    overflow: hidden;
    background: radial-gradient(circle at center, rgba(255, 255, 255, 0.6), transparent 44%),
        linear-gradient(145deg, rgba(229, 213, 188, 0.58), rgba(248, 244, 237, 0.9));
}

.hero__badge {
    position: absolute;
    top: 20px;
    right: 20px;
    padding: 8px 12px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.74);
    color: var(--accent-dark);
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.04em;
}

.eyebrow {
    margin: 0 0 10px;
    color: var(--accent-dark);
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 0.14em;
    text-transform: uppercase;
}

h1,
h2,
h3 {
    margin: 0;
    font-family: Georgia, 'Times New Roman', serif;
    line-height: 0.95;
}

h1 {
    font-size: clamp(3rem, 7vw, 5.5rem);
}

h2 {
    font-size: clamp(1.8rem, 4vw, 2.5rem);
}

h3 {
    font-size: clamp(1.35rem, 2.4vw, 1.8rem);
}

.lead,
.section-heading__text {
    color: var(--muted);
    line-height: 1.6;
}

.lead {
    max-width: 42rem;
    margin: 18px 0 0;
    font-size: 1.08rem;
}

.hero__actions {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 14px;
    margin-top: 28px;
}

.action-card,
.copy-button,
.icon-card {
    transition:
        transform 180ms ease,
        border-color 180ms ease,
        background-color 180ms ease,
        box-shadow 180ms ease;
}

.action-card {
    display: grid;
    gap: 10px;
    padding: 16px 18px;
    border: 1px solid var(--border);
    border-radius: 20px;
    background: var(--surface-strong);
    color: inherit;
    text-align: left;
    cursor: pointer;
}

.action-card:hover,
.copy-button:hover,
.icon-card:hover {
    transform: translateY(-2px);
    border-color: rgba(203, 95, 46, 0.34);
    box-shadow: 0 12px 24px rgba(111, 61, 26, 0.12);
}

.action-card__label {
    color: var(--accent-dark);
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 0.12em;
    text-transform: uppercase;
}

code,
pre {
    font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', monospace;
}

code {
    font-size: 0.92rem;
}

.preview-orbit {
    position: relative;
    width: min(320px, 80%);
    aspect-ratio: 1;
}

.preview-orbit__ring,
.preview-orbit__core,
.preview-orbit__node {
    position: absolute;
    inset: 0;
    border-radius: 50%;
}

.preview-orbit__ring {
    border: 1px dashed rgba(139, 59, 28, 0.16);
}

.preview-orbit__ring_small {
    inset: 18%;
}

.preview-orbit__core,
.preview-orbit__node {
    display: grid;
    place-items: center;
    background: rgba(255, 252, 247, 0.9);
}

.preview-orbit__core {
    inset: 34%;
    color: var(--accent);
    animation: pulse 5s ease-in-out infinite;
}

.preview-orbit__node {
    width: 64px;
    height: 64px;
    inset: auto;
    color: var(--accent-dark);
}

.preview-orbit__node_top {
    top: 6%;
    left: calc(50% - 32px);
}

.preview-orbit__node_right {
    top: calc(50% - 32px);
    right: 6%;
}

.preview-orbit__node_bottom {
    bottom: 6%;
    left: calc(50% - 32px);
}

.preview-orbit__node_left {
    top: calc(50% - 32px);
    left: 6%;
}

.usage {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
}

.panel {
    padding: 24px;
}

.panel__header,
.section-heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
}

.copy-button {
    padding: 10px 14px;
    border: 1px solid var(--border);
    border-radius: 999px;
    background: #fff8f1;
    color: var(--accent-dark);
    font-size: 13px;
    font-weight: 700;
    cursor: pointer;
}

pre {
    overflow: auto;
    margin: 18px 0 0;
    padding: 18px;
    border-radius: 20px;
    background: #231b18;
    color: #fdf6ee;
    line-height: 1.6;
}

.catalog {
    padding: 6px 0;
}

.catalog-groups {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 16px;
    margin-top: 20px;
}

.catalog-group {
    padding: 22px;
    border: 1px solid var(--border);
    border-radius: 28px;
    background: rgba(255, 249, 240, 0.72);
    box-shadow: 0 14px 30px rgba(89, 58, 32, 0.07);
}

.catalog-group_tile {
    display: grid;
    grid-template-rows: auto 1fr;
    gap: 14px;
}

.catalog-group__header {
    display: grid;
    gap: 8px;
    margin-bottom: 0;
}

.icon-card {
    display: grid;
    gap: 12px;
    justify-items: center;
    padding: 18px 14px;
    color: inherit;
    cursor: pointer;
}

.icon-card__preview {
    display: grid;
    place-items: center;
    width: 72px;
    height: 72px;
    border-radius: 22px;
    background: radial-gradient(circle at top, rgba(203, 95, 46, 0.18), transparent 58%), #fff9f3;
    color: var(--accent-dark);
}

.icon-card__name {
    font-size: 0.95rem;
    font-weight: 700;
}

.icon-card__meta {
    color: var(--muted);
    font-size: 0.82rem;
}

@keyframes pulse {
    0%,
    100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.06);
    }
}

@media (max-width: 900px) {
    .hero,
    .usage {
        grid-template-columns: 1fr;
    }

    .hero__actions {
        grid-template-columns: 1fr;
    }

    .section-heading {
        flex-direction: column;
        align-items: flex-start;
    }
}

@media (max-width: 640px) {
    .showcase {
        width: min(100% - 20px, 1200px);
        padding-top: 20px;
    }

    .hero__copy,
    .hero__preview,
    .panel,
    .catalog-group {
        padding: 20px;
        border-radius: 22px;
    }

    .preview-orbit__node {
        width: 56px;
        height: 56px;
    }

    .preview-orbit__node_top,
    .preview-orbit__node_bottom {
        left: calc(50% - 28px);
    }

    .preview-orbit__node_left,
    .preview-orbit__node_right {
        top: calc(50% - 28px);
    }
}
</style>
