<template>
    <svg v-bind="iconSvgAttrs" :width="size" :height="size">
        <path
            fill="currentColor"
            d="M84 96h344c13.2 0 25.2 7.8 30.7 19.8 5.5 12 3.4 26.1-5.2 36l-137.5 158V454c0 10.1-4.9 19.6-13.2 25.6-8.3 6-19 7.8-28.9 4.8a32 32 0 0 1-11.6-6.4l-52-46.8a31.9 31.9 0 0 1-10.3-23.8V309.8L54.5 151.8c-8.6-9.9-10.7-24-5.2-36C54.8 103.8 66.8 96 80 96h4Z"
        />
        <defs>
            <mask :id="maskId">
                <rect width="512" height="512" fill="black" />
                <circle cx="418" cy="362" r="92" fill="white" />
                <path
                    d="M376 320 460 404M460 320 376 404"
                    stroke="black"
                    stroke-width="36"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="none"
                />
            </mask>
        </defs>
        <rect width="512" height="512" fill="currentColor" :mask="`url(#${maskId})`" />
    </svg>
</template>

<script setup lang="ts">
import { useId } from 'vue';
import { iconSizeDefaults, iconSvgAttrs, type IconSizeProps } from './_shared';

withDefaults(defineProps<IconSizeProps>(), iconSizeDefaults);

const maskId = useId();
</script>
