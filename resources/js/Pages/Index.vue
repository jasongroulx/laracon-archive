<template>
<Video title="Test Video" duration="45:19">
</Video>
</template>

<script setup>
import { Head, Link } from '@inertiajs/inertia-vue3';
import Video from '../Components/Video.vue';

defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String,
});
</script>

<style scoped>

</style>
