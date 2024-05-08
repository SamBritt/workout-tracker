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
  <tr
    class="items-center bg-slate-700 p-2 hover:bg-slate-700/60 hover:cursor-pointer">
    <td class="">
      <Avatar
        :first="athlete.firstName"
        :last="athlete.lastName" />
    </td>

    <td class="">
      <p class="font-medium text-slate-300">{{ fullName }}</p>
    </td>

    <td class="">
      <p class="font-medium text-slate-300">{{ athlete.class }}</p>
    </td>

    <td class="">
      <p class="font-medium text-slate-300">{{ athlete.weeklyMileage }}</p>
    </td>
  </tr>
</template>

<style></style>
