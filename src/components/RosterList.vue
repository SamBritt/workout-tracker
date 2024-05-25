<script setup lang="ts">
import { storeToRefs } from 'pinia'
import RosterListItem from './RosterListItem.vue'
import { useAthleteStore } from '@/stores/AthleteStore'
import { useAppStore } from '@/stores/AppStore'
import type { Athlete } from '@/types/athlete'

const appStore = useAppStore()
const athleteStore = useAthleteStore()
const { athletes } = storeToRefs(athleteStore)

const showDetails = (athlete: Athlete) => {
  athleteStore.setCurrentAthlete(athlete)
  appStore.toggleModal('AthleteDetails', true)
}
</script>

<template>
  <div class="flex gap-2">
    <RosterListItem
      v-for="athlete in athletes"
      :key="athlete.id"
      @click="showDetails(athlete)"
      :athlete="athlete" />
  </div>
</template>

<style></style>
