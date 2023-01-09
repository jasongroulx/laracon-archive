<script setup>
import { defineProps } from 'vue'

defineProps({video: { type: Object }})
</script>

<template>
    <tr :key="`video-${video.id}`" class="py-2 px-4">
        <td class="p-2 font-bold text-lg">{{ video.title }}</td>
        <td class="p-2 text-gray-600">{{ video.description }}</td>
        <td class="p-2">{{ video.speaker.full_name}}</td>
        <td class="p-2">{{ video.conference.name }} ({{video.conference.year}})</td>
    </tr>
</template>
