<script setup lang="ts">
import AppLayout from '@/Layouts/AppLayout.vue';
import { defineProps, reactive, computed } from 'vue';
import {IVideo} from "../Interfaces";
import ExpandableTableRow from "../Components/ExpandableTableRow.vue";
import SortableTableHeader from "../Components/SortableTableHeader.vue";
import {get} from 'lodash';
import {IPaginatedCollection} from "../Interfaces/IPaginatedCollection";
import {Link} from "@inertiajs/inertia-vue3";

interface DashboardProps {
    videos: IPaginatedCollection<IVideo>
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
        return props.videos.data;
    }

    let s = props.videos.data.sort((a, b) => {
        return get(a, state.heading).localeCompare(get(b, state.heading));
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
                    <div class="flex items-center justify-center gap-2 mb-2">
                        <Link :href="link.url" class="border rounded py-0.5 px-1" v-for="link in videos.links" :key="`link-${link.label}`" v-html="link.label"></Link>
                    </div>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
