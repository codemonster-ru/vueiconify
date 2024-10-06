<template>
    <component :is="props.icon" />
</template>

<script setup lang="ts">
import { CmMoonIcon } from '@/lib';
import type { Component } from 'vue';

interface Props {
    icon: Component;
}

const props = withDefaults(defineProps<Props>(), {
    icon: CmMoonIcon,
});
</script>