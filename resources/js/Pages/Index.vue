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
    videos: Array
});

</script>

<style scoped>

</style>
