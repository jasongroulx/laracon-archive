<template>
    <div class="border-2 border-gray-100 w-72 h-56">
        <div>{{ video.title }}</div>
        <div>{{ video.duration }}</div>
        <Link :href="`/watch/${video.id}`">Play Now</Link>
    </div>
</template>

<script setup>
import { Link } from '@inertiajs/inertia-vue3'


defineProps({
    video: Object,
});

</script>

<style scoped>

</style>
