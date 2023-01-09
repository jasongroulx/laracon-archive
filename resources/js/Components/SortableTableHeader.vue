<script setup lang="ts">

import {reactive} from "vue";

const state = reactive({titleSortOrderAsc: true})
defineProps({title: {type: String}})
</script>


<template>
    {{ title }}
    <div class="inline cursor-pointer" @click="state.titleSortOrderAsc = !state.titleSortOrderAsc">
        <svg v-if="state.titleSortOrderAsc" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
        <svg v-if="!state.titleSortOrderAsc" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>
    </div>
</template>
