<template>
    <VideoSection title="Recommended" :videos="videos"/>
</template>

<script setup lang="ts">
import VideoSection from '../Components/VideoSection.vue';

defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String,
});

const videos = [
    { title: 'Video 1', duration: '1:45', id: 1 },
    { title: 'Video 2', duration: '1:46', id: 2 },
    { title: 'Video 3', duration: '1:47', id: 3 },
]
</script>

<style scoped>

</style>
