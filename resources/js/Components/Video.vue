<template>
    <div class="border-2 border-gray-100 w-72 h-56">
        <div>{{ video.title }}</div>
        <div>{{ video.duration }}</div>
        <Link :href="`/watch/${video.id}`" class="rounded-l-md bg-blue-900 text-white">Play Now</Link>
    </div>
</template>

<script setup lang="ts">
import { Link } from '@inertiajs/inertia-vue3'
import { IVideo } from "../Interfaces"

interface VideoProps {
    video: IVideo
}

defineProps<VideoProps>();

</script>

<style scoped>

</style>
