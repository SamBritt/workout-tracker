<script setup lang="ts">
import { storeToRefs } from 'pinia'
import RosterListItem from './RosterListItem.vue'
import { useAthleteStore } from '@/stores/AthleteStore'
import { useAppStore } from '@/stores/AppStore';
import type { Athlete } from '@/types/athlete';

const appStore = useAppStore()
const athleteStore = useAthleteStore()
const { athletes } = storeToRefs(athleteStore)

const showDetails = (athlete: Athlete) => {
  athleteStore.setCurrentAthlete(athlete)
  appStore.toggleModal('AthleteDetails', true)
}
</script>

<template>
  <table class="table table-auto w-full border-collapse border border-slate-500">
    <colgroup>
      <col />
      <col class="w-4/12" />
      <col class="w-4/12" />
      <col class="w-2/12" />
    </colgroup>
    <thead class="bg-slate-600 text-left">
      <tr class="p-2">
        <th></th>
        <th>Name</th>
        <th>Class</th>
        <th>MPW</th>
      </tr>
    </thead>

    <tbody>
      <RosterListItem
        v-for="athlete in athletes"
        @click="showDetails(athlete)"
        :athlete="athlete" />
    </tbody>
  </table>
</template>

<style></style>
