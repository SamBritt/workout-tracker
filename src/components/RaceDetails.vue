<script setup lang="ts">
import { useAthleteStore } from '@/stores/AthleteStore'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
import Avatar from './Avatar.vue'
import DetailsSection from './DetailsSection.vue'
import SectionItem from './SectionItem.vue'
import { useRaceStore } from '@/stores/RaceStore'

const raceStore = useRaceStore()
const { currentRace } = storeToRefs(raceStore)


</script>

<template>
  <div class="">
    <div class="flex flex-col items-center">
      <h2 class="text-white text-3xl">{{ currentRace.title }}</h2>
    </div>

    <div class="flex gap-6">
      <!-- <DetailsSection heading="Personal Records">
        <section class="flex flex-col leading-5">
          <SectionItem
            v-if="currentRace.results?.teamScore"
            label="team score"
            :value="currentRace.results?.teamScore.toString()" />
          <SectionItem
            label="1600"
            value="4:32" />
          <SectionItem
            label="3200"
            value="10:20" />
        </section>
      </DetailsSection> -->
    </div>
  </div>
</template>

<style></style>
