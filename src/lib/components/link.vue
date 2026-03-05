<template>
    <svg v-bind="iconSvgAttrs" :width="size" :height="size">
        <path
            d="M132 328c-33.1-33.1-33.1-86.9 0-120L176 164c33.1-33.1 86.9-33.1 120 0s33.1 86.9 0 120l-44 44c-33.1 33.1-86.9 33.1-120 0Z"
            stroke="currentColor"
            stroke-width="44"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
        />
        <path
            d="M260 260c-33.1-33.1-33.1-86.9 0-120L304 96c33.1-33.1 86.9-33.1 120 0s33.1 86.9 0 120l-44 44c-33.1 33.1-86.9 33.1-120 0Z"
            stroke="currentColor"
            stroke-width="44"
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
