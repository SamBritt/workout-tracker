<script setup lang="ts">
import { ref } from 'vue'
import RosterList from '@/components/RosterList.vue'
import RaceList from '@/components/RaceList.vue'
import VButton from '@/components/VButton.vue'
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
      <VButton @click="setCurrent('Workout')">Workout</VButton>
      <VButton @click="setCurrent('Roster')">Roster</VButton>
      <VButton @click="setCurrent('RaceList')">Race</VButton>
    </div>

    <RosterList v-if="isCurrent('Roster')" />
    <RaceList v-if="isCurrent('RaceList')" />
  </div>
</template>

<style></style>
