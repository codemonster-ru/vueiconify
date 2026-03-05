<template>
    <svg v-bind="iconSvgAttrs" :width="size" :height="size">
        <path
            d="M224 288 92 420"
            stroke="currentColor"
            stroke-width="48"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
        />
        <path
            d="M92 356v64h64"
            stroke="currentColor"
            stroke-width="48"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
        />
        <path
            d="M288 224 420 92"
            stroke="currentColor"
            stroke-width="48"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
        />
        <path
            d="M356 92h64v64"
            stroke="currentColor"
            stroke-width="48"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
        />
    </svg>
</template>

<script setup lang="ts">
import { iconSizeDefaults, iconSvgAttrs, type IconSizeProps } from './_shared';

withDefaults(defineProps<IconSizeProps>(), iconSizeDefaults);
</script>
