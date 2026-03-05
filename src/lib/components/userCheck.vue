<template>
    <svg v-bind="iconSvgAttrs" :width="size" :height="size">
        <circle cx="224" cy="168" r="84" fill="currentColor" />
        <path
            fill="currentColor"
            d="M196 324C104.32 324 30 398.32 30 490V512C30 529.67 44.33 544 62 544H386C403.67 544 418 529.67 418 512V490C418 398.32 343.68 324 252 324H196Z"
        />
        <path
            fill="currentColor"
            d="M471.28 166.45C478.86 157.23 492.48 155.91 501.69 163.49C510.91 171.07 512.23 184.68 504.65 193.9L430.85 283.66C427.08 288.24 421.59 291.07 415.68 291.48C409.76 291.89 403.93 289.84 399.57 285.8L360.05 249.2C351.32 241.12 350.8 227.51 358.87 218.79C366.95 210.07 380.56 209.54 389.29 217.62L411.97 238.62L471.28 166.45Z"
        />
    </svg>
</template>

<script setup lang="ts">
import { iconSizeDefaults, iconSvgAttrs, type IconSizeProps } from './_shared';

withDefaults(defineProps<IconSizeProps>(), iconSizeDefaults);
</script>
