<template>
    <svg v-bind="iconSvgAttrs" :width="size" :height="size">
        <path
            fill="currentColor"
            d="M256 72C287.53 72 313.02 140.24 318.17 232H193.83C198.98 140.24 224.47 72 256 72Z"
        />
        <path
            fill="currentColor"
            d="M193.83 280H318.17C313.02 371.76 287.53 440 256 440C224.47 440 198.98 371.76 193.83 280Z"
        />
        <path
            fill="currentColor"
            d="M194 100C157.27 132.34 132.69 177.03 127.87 232H72.93C81.57 177.38 112.59 130.05 157.68 104L194 100Z"
        />
        <path
            fill="currentColor"
            d="M318 100L354.32 104C399.41 130.05 430.43 177.38 439.07 232H384.13C379.31 177.03 354.73 132.34 318 100Z"
        />
        <path
            fill="currentColor"
            d="M72.93 280H127.87C132.69 334.97 157.27 379.66 194 412L157.68 408C112.59 381.95 81.57 334.62 72.93 280Z"
        />
        <path
            fill="currentColor"
            d="M318 412C354.73 379.66 379.31 334.97 384.13 280H439.07C430.43 334.62 399.41 381.95 354.32 408L318 412Z"
        />
    </svg>
</template>

<script setup lang="ts">
import { iconSizeDefaults, iconSvgAttrs, type IconSizeProps } from './_shared';

withDefaults(defineProps<IconSizeProps>(), iconSizeDefaults);
</script>
