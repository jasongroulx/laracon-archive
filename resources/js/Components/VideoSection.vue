<template>
<div>
    <h2>{{ title }}</h2>
    <Video v-for="video of videos" :title="video.title" :url="video.url" :duration="video.duration" />
</div>
</template>

<script setup>
import Video from './Video.vue';

defineProps({
    title: String,
    videos: Array,
})
</script>
