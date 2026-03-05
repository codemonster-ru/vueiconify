<template>
    <svg v-bind="iconSvgAttrs" :width="size" :height="size">
        <path
            fill="currentColor"
            d="M236 84.3a28 28 0 0 1 40 0l160 152c18 17.1 5.9 47.7-18.8 47.7H392V404c0 35.3-28.7 64-64 64H184c-35.3 0-64-28.7-64-64V284H94.8c-24.7 0-36.8-30.6-18.8-47.7l160-152Z"
        />
        <path fill="#f7f1e7" d="M256 250c30.9 0 56 25.1 56 56v86h-112v-86c0-30.9 25.1-56 56-56Z" />
    </svg>
</template>

<script setup lang="ts">
import { iconSizeDefaults, iconSvgAttrs, type IconSizeProps } from './_shared';

withDefaults(defineProps<IconSizeProps>(), iconSizeDefaults);
</script>
