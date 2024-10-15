<template>
    <component :is="loadIcon" />
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
});
const loadIcon = computed(() => defineAsyncComponent(() => import('..' + `/components/${props.icon}.vue`)));
</script>