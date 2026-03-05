<template>
    <svg v-bind="iconSvgAttrs" :width="size" :height="size">
        <path
            d="M420 92 288 224"
            stroke="currentColor"
            stroke-width="48"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
        />
        <path
            d="M352 224h-64v-64"
            stroke="currentColor"
            stroke-width="48"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
        />
        <path
            d="M92 420 224 288"
            stroke="currentColor"
            stroke-width="48"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
        />
        <path
            d="M160 288h64v64"
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
