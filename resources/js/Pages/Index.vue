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
    { title: 'Freek Van Der Herten - Laravel MediaLibrary v7', duration: '41:01', id: 1, thumbnailUrl: 'https://img.youtube.com/vi/3eyftAR5ilo/0.jpg' },
    { title: 'Samantha Geitz - Full-Stack Testing Strategies', duration: '39:59', id: 2, thumbnailUrl: 'https://img.youtube.com/vi/AxlqFgY0BGY/0.jpg' },
    { title: 'Jason McCreary - Laravel by the Numbers', duration: '44:20', id: 3, thumbnailUrl: 'https://img.youtube.com/vi/dccDqpmKVFM/0.jpg' },
]
</script>

<style scoped>

</style>
