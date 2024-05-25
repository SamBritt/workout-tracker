<script setup lang="ts">
import type { Athlete } from '@/types/athlete'

import Avatar from './Avatar.vue'
import { computed } from 'vue'

const props = defineProps<{
  athlete: Athlete
}>()

const fullName = computed(() => {
  return `${props.athlete.firstName} ${props.athlete.lastName}`
})
</script>

<template>
  <section class="flex items-center justify-between bg-slate-700 p-4 hover:bg-slate-700/60 hover:cursor-pointer rounded gap-2 w-56 h-24">
    <div class="">
      <Avatar
        :first="athlete.firstName"
        :last="athlete.lastName" />
    </div>

    <div class="">
      <p class="font-medium text-slate-300 text-xl">{{ fullName }}</p>
      <p class="font-medium text-slate-300">{{ athlete.class }}</p>

    </div>
    <p class="font-medium text-slate-300 text-3xl">{{ athlete.weeklyMileage }}</p>
  </section>
</template>

<style></style>
