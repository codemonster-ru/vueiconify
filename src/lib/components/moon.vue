<template>
    <svg v-bind="iconSvgAttrs" :width="size" :height="size">
        <defs>
            <mask :id="maskId">
                <rect width="512" height="512" fill="black" />
                <circle cx="224" cy="256" r="174" fill="white" />
                <circle cx="326" cy="220" r="146" fill="black" />
            </mask>
        </defs>
        <rect width="512" height="512" fill="currentColor" :mask="`url(#${maskId})`" />
    </svg>
</template>

<script setup lang="ts">
import { useId } from 'vue';
import { iconSizeDefaults, iconSvgAttrs, type IconSizeProps } from './_shared';

const maskId = useId();

withDefaults(defineProps<IconSizeProps>(), iconSizeDefaults);
</script>
