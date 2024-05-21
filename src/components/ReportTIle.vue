<script setup lang="ts">
import type { WorkoutScheduled } from '@/types/workout'
import { shortDate } from '@/utility/dates'
import { computed } from 'vue'
import SplitItem from './SplitItem.vue'

const { workout, current } = defineProps<{
  workout: WorkoutScheduled
  current: boolean
}>()

const shortDay = computed(() => {
  return shortDate(workout.day, {
    weekday: 'short',
    month: 'long',
    day: 'numeric'
  })
})
</script>

<template>
  <div
    @click="$emit('select', workout)"
    :class="[
      'flex flex-col items-center rounded-md p-2 w-36 h-20 min-w-max hover:cursor-pointer transition-all ease duration-100',
      current ? 'bg-slate-700 shadow-sky-500/50 shadow-md scale-95' : 'bg-slate-700'
    ]">
    <h2 class="text-center text-base leading-4">{{ shortDay }}</h2>

    <div class="flex flex-col h-full justify-center">
      <ul
        class="flex flex-col text-xs text-left"
        v-if="workout.details">
        <SplitItem
          v-for="(split, idx) in workout.details.slice(0, 2)"
          :key="`rep-${idx}`"
          :split="split"
          hideRest />
      </ul>
      <span v-if="workout.details?.length > 2" class="text-center text-xs text-slate-300 leading-3">...</span>
      <div
        v-if="!workout.details"
        class="text-slate-400">
        OFF
      </div>
    </div>
  </div>
</template>
