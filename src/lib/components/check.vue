<template>
    <svg v-bind="iconSvgAttrs" :width="size" :height="size">
        <path
            d="M128 274 220 364 392 148"
            stroke="currentColor"
            stroke-width="56"
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
