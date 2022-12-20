<template>
<div style="background: #161616;" class="container mx-auto">
    <h2 class="text-2xl">{{ title }}</h2>
    <div class="grid grid-cols-3 gap-4">
        <Video v-for="video of videos" :video="video" />
    </div>
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
