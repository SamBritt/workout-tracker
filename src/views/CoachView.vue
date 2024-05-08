<script setup lang="ts">
import { ref } from 'vue'
import RosterList from '@/components/RosterList.vue'
import RaceList from '@/components/RaceList.vue'
const activeView = ref('Roster')

const isCurrent = (value: string) => {
  return activeView.value === value
}

const setCurrent = (value: string) => {
  activeView.value = value
}
</script>

<template>
  <div>
    <div class="flex gap-2">
      <button
        class="flex bg-slate-700 p-2 text-zinc-300"
        @click="setCurrent('Workout')">
        Workout
      </button>
      <button
        class="flex bg-slate-700 p-2 text-zinc-300"
        @click="setCurrent('Roster')">
        Roster
      </button>
      <button
        class="flex bg-slate-700 p-2 text-zinc-300"
        @click="setCurrent('RaceList')">
        Race
      </button>
    </div>

    <RosterList v-if="isCurrent('Roster')" />
    <RaceList v-if="isCurrent('RaceList')" />
  </div>
</template>

<style></style>
