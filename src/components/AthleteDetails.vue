<script setup lang="ts">
import { useAthleteStore } from '@/stores/AthleteStore'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
import Avatar from './Avatar.vue'
import DetailsSection from './DetailsSection.vue'
import SectionItem from './SectionItem.vue'

const athleteStore = useAthleteStore()
const { currentAthlete } = storeToRefs(athleteStore)

const fullName = computed(() => {
  return `${currentAthlete.value.firstName} ${currentAthlete.value.lastName}`
})
</script>

<template>
  <div class="">
    <div class="flex flex-col items-center">
      <Avatar
        :first="currentAthlete.firstName"
        :last="currentAthlete.lastName" />
      <h2 class="text-white text-3xl">{{ fullName }}</h2>
    </div>

    <div class="flex gap-6">
      <DetailsSection heading="Personal Records">
        <section class="flex flex-col leading-5">
          <SectionItem
            label="800m"
            value="2:05" />
          <SectionItem
            label="1600"
            value="4:32" />
          <SectionItem
            label="3200"
            value="10:20" />
        </section>
      </DetailsSection>
    </div>
    <div class="flex gap-6">
      <DetailsSection heading="Contact">
        <section class="flex flex-col leading-5">
          <SectionItem
            label="phone"
            value="(615)719-1123" />
          <SectionItem
            label="email"
            value="test@user.com" />
        </section>
      </DetailsSection>

      <DetailsSection heading="Emergency">
        <section class="flex flex-col leading-5">
          <SectionItem
            label="name"
            value="Mary Wilson" />
          <SectionItem
            label="relationship"
            value="Mother" />
          <SectionItem
            label="phone"
            value="(615)719-1123" />
          <SectionItem
            label="email"
            value="test@user.com" />
        </section>
      </DetailsSection>
    </div>
  </div>
</template>

<style></style>
