<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'
import RosterList from '@/components/RosterList.vue'
import WorkoutList from '@/components/WorkoutList.vue'
import RaceList from '@/components/RaceList.vue'
import VButton from '@/components/VButton.vue'
import { useWorkoutStore } from '@/stores/WorkoutStore'
import { storeToRefs } from 'pinia'

const activeView = ref('Roster')

const workoutStore = useWorkoutStore()
const { workouts, loadingWorkouts } = storeToRefs(workoutStore)

onBeforeMount(() => {
  workoutStore.fetchWorkouts()
})

const isCurrent = (value: string) => {
  return activeView.value === value
}

const setCurrent = (value: string) => {
  activeView.value = value
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex gap-2">
      <!-- <VButton @click="setCurrent('Workout')">Workout</VButton>
      <VButton @click="setCurrent('Roster')">Roster</VButton>
      <VButton @click="setCurrent('RaceList')">Race</VButton> -->
    </div>

    <section class="">
      <RosterList />
      <RaceList />
      <WorkoutList v-if="!loadingWorkouts" />
    </section>
  </div>
</template>

<style></style>
