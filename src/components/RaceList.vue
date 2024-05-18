<script setup lang="ts">
import RaceListItem from '@/components/RaceListItem.vue'
import { storeToRefs } from 'pinia'
import type { Race } from '@/types/race'
import { useRaceStore } from '@/stores/RaceStore'
import { useAppStore } from '@/stores/AppStore';

const appStore = useAppStore()
const raceStore = useRaceStore()

const { races } = storeToRefs(raceStore)

const showDetails = (race: Race) => {
  raceStore.setCurrentRace(race)
  appStore.toggleModal('RaceDetails', true)
}
</script>

<template>
  <table class="table table-auto w-full border-none border-separate border-spacing-y-4">
    <colgroup>
      <col class="w-2/12" />
      <col class="w-2/12" />
      <col class="w-2/12" />
      <col class="w-2/12" />
      <col class="w-2/12" />
    </colgroup>
    <thead class="bg-slate-700/50 text-left p-2">
      <tr class="p-2 text-slate-200">
        <th class="p-2">Event</th>
        <th class="p-2">Athletes</th>
        <th class="p-2">Date</th>
        <th class="p-2">Start/End</th>
        <th class="p-2">Location</th>
      </tr>
    </thead>

    <tbody class="">
      <RaceListItem
        v-for="race of races"
        @click="showDetails(race)"
        :key="race.id"
        :race="race" />
    </tbody>
  </table>
</template>

<style></style>
