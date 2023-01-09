<script setup>
import { defineProps, reactive } from 'vue'

const state = reactive({visible: false})
defineProps({video: { type: Object }})
</script>

<template>
    <tr :key="`video-${video.id}`" class="py-2 px-4">
        <td class="p-2 font-bold text-lg">{{ video.title }}</td>
        <td class="p-2 text-gray-600">{{ video.description }}</td>
        <td class="p-2">{{ video.speaker.full_name}}</td>
        <td class="p-2">{{ video.conference.name }} ({{video.conference.year}})</td>
        <td>
            <button @click="state.visible = !state.visible">
                More Details
            </button>
        </td>
    </tr>
    <tr colspan="5" v-if="state.visible">
        <td>
            <img :src="video.thumbnailUrl"/>
            <div>Duration: {{video.duration}}</div>
        </td>
    </tr>
</template>
