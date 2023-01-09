<script setup lang="ts">
import AppLayout from '@/Layouts/AppLayout.vue';
import { defineProps } from 'vue';
import {IVideo} from "../Interfaces";
import ExpandableTableRow from "../Components/ExpandableTableRow.vue";

interface DashboardProps {
    videos: IVideo[]
}

defineProps<DashboardProps>()
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
                            <th>Title</th>
                            <th>Description</th>
                            <th>Speaker</th>
                            <th>Conference</th>
                            <th></th>
                        </tr>
                        </thead>
                       <tbody>
                        <expandable-table-row v-for="video in videos" :key="`video-${video.id}`" :video="video"></expandable-table-row>
                       </tbody>
                    </table>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
