<template>
    <div class="relative group overflow-hidden">
        <img class="object-cover" :src="video.thumbnailUrl" :alt="video.title">
        <div class="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-50"></div>
        <div class="text-white absolute bottom-[20px]">
            <p>{{ video.title }}</p>
            <p>{{ video.duration }}</p>

        </div>

        <div class="hidden group-hover:flex absolute top-0 bottom-0 left-0 right-0 items-center justify-center">
                <Link :href="`/watch/${video.id}`" class="rounded-full bg-red-600 text-white p-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                    </svg>
                </Link>
        </div>
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
