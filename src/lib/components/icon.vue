<template>
    <component :is="loadIcon" :class="getClasses" />
</template>

<script setup lang="ts">
import icons from '@/lib/icons.json';
import { computed, defineAsyncComponent } from 'vue';

const props = defineProps({
    icon: {
        type: String,
        default: 'moon',
        validator: (value: string) => icons.list.indexOf(value) > -1,
    },
    spin: {
        type: Boolean,
        default: false,
    },
});
const loadIcon = computed(() => {
    const icon = props.icon;

    return defineAsyncComponent(() => import('..' + `/components/${icon}.vue`));
});
const getClasses = computed(() => {
    let classes = ['cm-icon'];

    if (props.spin) {
        classes.push('cm-icon_animations_spin');
    }

    return classes;
});
</script>

<style lang="scss">
.cm-icon_animations_spin {
    animation-name: cm-spin;
    animation-delay: 0s;
    animation-duration: 2s;
    animation-direction: normal;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}

@keyframes cm-spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>