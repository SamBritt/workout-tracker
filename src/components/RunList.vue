<script setup lang="ts">
import Heading from '@/components/Heading.vue'
import HistoryItem from '@/components/HistoryItem.vue'
import { Workout } from '@/types/workout'

defineProps<{
  list: Workout[]
}>()
</script>

<template>
  <div class="flex flex-col w-full rounded-md px-4 py-2 gap-2">
    <Heading>Run History</Heading>

    <div class="flex flex-col gap-4">
      <HistoryItem
        v-for="workout in list"
        :workout="workout"
        :key="workout.id" />
    </div>
  </div>
</template>
