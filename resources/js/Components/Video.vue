<template>
    <div class="border-2 border-gray-100 w-72 h-56">
        <div>{{ title }}</div>
        <div>{{ duration }}</div>
        <Link :href="url">Play Now</Link>
    </div>
</template>

<script setup>
import { Link } from '@inertiajs/inertia-vue3'


defineProps({
    title: String,
    url: String,
    duration: String
});

</script>

<style scoped>

</style>
