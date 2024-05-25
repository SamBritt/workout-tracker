<script setup lang="ts">
import WorkoutCard from "@/components/WorkoutCard.vue"
import { useWorkoutStore } from "@/stores/WorkoutStore";
import { storeToRefs } from "pinia";


const workoutStore = useWorkoutStore()
const { workouts } = storeToRefs(workoutStore)

const filteredWorkouts = workouts.value.filter((workout) => workout.type !== 'run')
</script>

<template>
  <div class="flex gap-4">
    <WorkoutCard
      v-for="workout in filteredWorkouts"
      :key="workout.id"
      :workout="workout" />
  </div>
</template>
