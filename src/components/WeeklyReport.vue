<script setup lang="ts">
import { computed, onBeforeMount, reactive, ref } from 'vue'
import Heading from '@/components/Heading.vue'
import ReportTile from '@/components/ReportTile.vue'
import type { Workout } from '@/types/workout'
import { useWorkoutStore } from '@/stores/WorkoutStore';
import { storeToRefs } from 'pinia';

const props = defineProps<{
  workouts: Workout[]
}>()

const store = useWorkoutStore()
const { currentWorkout } = storeToRefs(store)
</script>

<template>
  <div class="text-gray-200">
    <Heading>Weekly Report</Heading>

    <div class="flex relative gap-1 overflow-hidden scroll h-24">
      <ReportTile
        v-for="(workout, idx) in workouts"
        @select="(workout) => $emit('select', workout)"
        :current="currentWorkout.day === workout.day"
        :workout="workout"
        :id="idx" />
    </div>
  </div>
</template>

<style scoped>
.scroll::-webkit-scrollbar {
  width: 2px;
}

.scroll::-webkit-scrollbar-thumb {
  background-color: gray;
  border-radius: 0.5rem;
}

.scroll::-webkit-scrollbar-track {
  background-color: transparent;
}
</style>
