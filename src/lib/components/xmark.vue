<template>
    <svg v-bind="iconSvgAttrs" :width="size" :height="size">
        <path
            d="M148 148 364 364M364 148 148 364"
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
