<template>
    <svg v-bind="iconSvgAttrs" :width="size" :height="size">
        <path
            fill="currentColor"
            d="M110 108h292c43.1 0 78 34.9 78 78v156c0 43.1-34.9 78-78 78H110c-43.1 0-78-34.9-78-78V186c0-43.1 34.9-78 78-78Z"
        />
        <path
            fill="#f7f1e7"
            d="M78 164 210.3 270c27.1 21.7 65.3 21.7 92.4 0L434 164v19L282 305c-15.2 12.2-36.6 12.2-51.8 0L78 183v-19Z"
        />
    </svg>
</template>

<script setup lang="ts">
import { iconSizeDefaults, iconSvgAttrs, type IconSizeProps } from './_shared';

withDefaults(defineProps<IconSizeProps>(), iconSizeDefaults);
</script>
