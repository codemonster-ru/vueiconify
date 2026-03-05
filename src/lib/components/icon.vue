<template>
    <component :is="iconComponent" v-bind="iconBindings" :class="classes" />
</template>

<script setup lang="ts">
import { computed, useAttrs, type Component } from 'vue';
import { iconNames, type IconName } from '@/lib/iconMeta';

defineOptions({
    inheritAttrs: false,
});

const FALLBACK_ICON = 'moon' as const;
type IconStyle = 'solid';

const iconModules = import.meta.glob('./*.vue', {
    eager: true,
    import: 'default',
}) as Record<string, Component>;

const props = withDefaults(
    defineProps<{
        icon?: IconName | string;
        spin?: boolean;
        size?: number | string;
        style?: IconStyle;
    }>(),
    {
        icon: FALLBACK_ICON,
        spin: false,
        size: 16,
        style: 'solid',
    },
);
const attrs = useAttrs();

const toComponentIconName = (iconName: string) => {
    if (!iconName.includes('-')) {
        return iconName;
    }

    return iconName.toLowerCase().replace(/-([a-z0-9])/g, (_, char: string) => char.toUpperCase());
};

const getIconComponent = (iconName: string) => {
    const componentIconName = toComponentIconName(iconName);
    const normalizedIconName = iconNames.includes(componentIconName as IconName) ? componentIconName : FALLBACK_ICON;
    const componentPath = `./${normalizedIconName}.vue`;

    return iconModules[componentPath] ?? iconModules[`./${FALLBACK_ICON}.vue`];
};

const iconComponent = computed(() => {
    return getIconComponent(props.icon);
});

const iconBindings = computed(() => {
    return {
        ...attrs,
        size: props.size,
    };
});

const classes = computed(() => {
    return {
        'vif-icon': true,
        'vif-icon_animations_spin': props.spin,
    };
});
</script>
<style lang="scss" scoped>
.vif-icon_animations_spin {
    animation-name: vif-spin;
    animation-delay: 0s;
    animation-duration: 2s;
    animation-direction: normal;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}

@keyframes vif-spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>
