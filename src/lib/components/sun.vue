<template>
    <svg v-bind="iconSvgAttrs" :width="size" :height="size">
        <defs>
            <mask :id="maskId">
                <rect width="512" height="512" fill="black" />
                <path
                    d="M256 34 318 128 410 106 388 198 474 256 388 314 410 406 318 384 256 478 194 384 102 406 124 314 38 256 124 198 102 106 194 128Z"
                    fill="white"
                    stroke="white"
                    stroke-linejoin="round"
                    stroke-width="52"
                />
                <circle cx="256" cy="256" r="108" fill="black" />
                <circle cx="256" cy="256" r="74" fill="white" />
            </mask>
        </defs>

        <rect width="512" height="512" fill="currentColor" :mask="`url(#${maskId})`" />
    </svg>
</template>

<script setup lang="ts">
import { useId } from 'vue';
import { iconSizeDefaults, iconSvgAttrs, type IconSizeProps } from './_shared';

withDefaults(defineProps<IconSizeProps>(), iconSizeDefaults);

const maskId = `sun-mask-${useId()}`;
</script>
