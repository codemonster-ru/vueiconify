<template>
    <svg v-bind="iconSvgAttrs" :width="size" :height="size">
        <rect x="52" y="84" width="408" height="344" rx="36" fill="currentColor" />
        <rect x="306" y="128" width="110" height="256" rx="24" fill="white" opacity="0.24" />
        <rect x="104" y="146" width="164" height="36" rx="18" fill="white" opacity="0.24" />
        <rect x="136" y="222" width="132" height="28" rx="14" fill="white" opacity="0.24" />
        <rect x="120" y="282" width="148" height="28" rx="14" fill="white" opacity="0.24" />
    </svg>
</template>

<script setup lang="ts">
import { iconSizeDefaults, iconSvgAttrs, type IconSizeProps } from './_shared';

withDefaults(defineProps<IconSizeProps>(), iconSizeDefaults);
</script>
