<template>
    <div>
        {{video.title}}
        <iframe :title="video.title" :src="video.url" width="560" height="315" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
</template>

<script setup lang="ts">
import {IVideo} from "../Interfaces";

interface WatchTalkProps {
    video: IVideo
}

defineProps<WatchTalkProps>();
</script>

<style scoped>

</style>
