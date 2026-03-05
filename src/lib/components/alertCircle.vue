<template>
    <svg v-bind="iconSvgAttrs" :width="size" :height="size">
        <path
            fill="currentColor"
            d="M256 460.8C142.88 460.8 51.2 369.12 51.2 256C51.2 142.88 142.88 51.2 256 51.2C369.12 51.2 460.8 142.88 460.8 256C460.8 369.12 369.12 460.8 256 460.8zM256 307.2C241.84 307.2 230.4 318.64 230.4 332.8C230.4 346.96 241.84 358.4 256 358.4C270.16 358.4 281.6 346.96 281.6 332.8C281.6 318.64 270.16 307.2 256 307.2zM256 153.6C241.44 153.6 229.84 166 230.88 180.56L236.8 263.76C237.52 273.84 245.92 281.6 255.92 281.6C266 281.6 274.32 273.84 275.04 263.76L280.96 180.56C282 166 270.48 153.6 255.84 153.6z"
        />
    </svg>
</template>

<script setup lang="ts">
import { iconSizeDefaults, iconSvgAttrs, type IconSizeProps } from './_shared';

withDefaults(defineProps<IconSizeProps>(), iconSizeDefaults);
</script>
