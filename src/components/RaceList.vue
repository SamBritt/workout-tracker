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
  <table class="table table-auto w-full border-collapse border border-slate-500">
    <colgroup>
      <col class="w-2/12" />
      <col class="w-2/12" />
      <col class="w-2/12" />
      <col class="w-2/12" />
      <col class="w-2/12" />
    </colgroup>
    <thead class="bg-slate-600 text-left">
      <tr class="p-2">
        <th>Event</th>
        <th>Athletes</th>
        <th>Date</th>
        <th>Start/End</th>
        <th>Location</th>
      </tr>
    </thead>

    <tbody class="divide-y divide-slate-500">
      <RaceListItem
        v-for="race of races"
        @click="showDetails(race)"
        :key="race.id"
        :race="race" />
    </tbody>
  </table>
</template>

<style></style>
