<script setup lang="ts">
import AppLayout from '@/Layouts/AppLayout.vue';
import { defineProps, reactive, computed } from 'vue';
import {IVideo} from "../Interfaces";
import ExpandableTableRow from "../Components/ExpandableTableRow.vue";
import SortableTableHeader from "../Components/SortableTableHeader.vue";

interface DashboardProps {
    videos: IVideo[]
}

const props = defineProps<DashboardProps>()
const state = reactive({heading: null, direction: null})

const onSort = (heading, direction) => {
    state.heading = heading
    state.direction = direction
    console.log([direction, heading])
}

const sortedVideos = computed(() => {
    if (!state.heading) {
        return props.videos;
    }
    console.log('heading', state.heading)
    // return state.direction === "asc" ? [props.videos[1]] : [props.videos[0]]

    let s = props.videos.sort((a, b) => {
        return a[state.heading].localeCompare(b[state.heading]);
    });
    return state.direction === 'asc' ? s : s.reverse();
})

</script>

<template>
    <AppLayout title="Dashboard">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Dashboard
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                    <table>
                        <thead>
                        <tr>
                            <th>
                                <sortable-table-header title="Title" @sorted="onSort('title', $event)" />
                            </th>
                            <th>
                                <sortable-table-header title="Description" @sorted="onSort('description', $event)"/>
                            </th>
                            <th>
                                <sortable-table-header title="Speaker" @sorted="onSort('speaker.full_name', $event)" />
                            </th>
                            <th>
                                <sortable-table-header title="Conference" @sorted="onSort('conference.name', $event)"/>
                            </th>
                            <th></th>
                        </tr>
                        </thead>
                       <tbody>
                        <expandable-table-row v-for="video in sortedVideos" :key="`video-${video.id}`" :video="video"></expandable-table-row>
                       </tbody>
                    </table>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
