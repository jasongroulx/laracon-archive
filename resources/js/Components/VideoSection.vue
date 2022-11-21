<template>
<div>
    <h2>{{ title }}</h2>
    <Video v-for="video of videos" :video="video" />
</div>
</template>

<script setup lang="ts">
import Video from './Video.vue';
import { IVideo } from "../Interfaces";

interface VideoSectionProps {
    title: string
    videos: IVideo[]
}

defineProps<VideoSectionProps>()
</script>
