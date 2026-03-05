<template>
    <svg v-bind="iconSvgAttrs" :width="size" :height="size">
        <circle cx="224" cy="168" r="84" fill="currentColor" />
        <path
            fill="currentColor"
            d="M196 324C104.32 324 30 398.32 30 490V512C30 529.67 44.33 544 62 544H386C403.67 544 418 529.67 418 512V490C418 398.32 343.68 324 252 324H196Z"
        />
        <rect x="396" y="136" width="44" height="176" rx="22" fill="currentColor" />
        <rect x="330" y="202" width="176" height="44" rx="22" fill="currentColor" />
    </svg>
</template>

<script setup lang="ts">
import { iconSizeDefaults, iconSvgAttrs, type IconSizeProps } from './_shared';

withDefaults(defineProps<IconSizeProps>(), iconSizeDefaults);
</script>
