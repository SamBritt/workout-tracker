<script setup lang="ts">
import { useAthleteStore } from '@/stores/AthleteStore'
import { storeToRefs } from 'pinia'
import { computed, ref } from 'vue'
import DetailsSection from './DetailsSection.vue'
import SectionItem from './SectionItem.vue'
import { useRaceStore } from '@/stores/RaceStore'
import Avatar from './Avatar.vue'

const raceStore = useRaceStore()
const { currentRace } = storeToRefs(raceStore)

const { results } = ref(currentRace)
</script>

<template>
  <div class="">
    <div class="flex flex-col items-center bg-slate-800 p-6 rounded-md">
      <h2 class="text-white text-5xl">{{ currentRace.title }}</h2>
      <h3 class="text-slate-300 text-lg">{{ currentRace.subTitle }}</h3>
    </div>

    <div class="flex flex-col">
      <div class="flex gap-6 justify-between">
        <DetailsSection heading="Info">
          <SectionItem
            label="date"
            :value="currentRace.date" />
          <SectionItem
            label="location"
            :value="currentRace.location.address" />
        </DetailsSection>
        <div class="h-56 w-56 bg-slate-800/50 rounded-md"></div>
      </div>

      <DetailsSection heading="Racing">
        <div class="flex gap-1">
          <Avatar v-for="n of 6" />
        </div>
      </DetailsSection>
      <DetailsSection heading="Results">
        <section class="flex flex-col leading-5">
          <SectionItem
            v-if="currentRace.results?.teamScore"
            label="team score"
            :value="currentRace.results?.teamScore.toString()" />
        </section>
      </DetailsSection>
    </div>
  </div>
</template>

<style></style>
