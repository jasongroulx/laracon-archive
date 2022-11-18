<template>
<div>
    <h2>{{ title }}</h2>
    <Video v-for="video of videos" :video="video" />
</div>
</template>

<script setup>
import Video from './Video.vue';

defineProps({
    title: String,
    videos: Array,
})
</script>
