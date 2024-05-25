<script setup lang="ts">
import type { ScheduleItem, Workout } from '@/types/workout'
import { shortDate } from '@/utility/dates'
import { computed } from 'vue'
import SplitItem from './SplitItem.vue'

const { workout, current } = defineProps<{
  workout: ScheduleItem
  current: boolean
}>()

const shortDay = computed(() => {
  return shortDate(workout.day, {
    weekday: 'short',
    month: 'long',
    day: 'numeric'
  })
})

const wrapperClass = computed(() => {
  const arr = [
    'flex',
    'flex-col',
    'items-center',
    'rounded-md',
    'p-2 w-36',
    'h-20',
    'min-w-max',
    'hover:cursor-pointer',
    'transition-all',
    'ease',
    'duration-100',
    'bg-slate-700'
  ]
  if (current && workout.data?.type !== 'race') {
    // if (workout.data?.type === 'race') {
    //   arr.push('border-2 border-amber-500/50')
    // } else {
    // }
    arr.push('border-sky-500/50 border-2')
  }

  if (workout.data?.type === 'race') {
    arr.push('border-2 border-amber-500/50')
  }

  return arr
})
</script>

<template>
  <div
    @click="$emit('select', workout)"
    :class="wrapperClass">
    <h2 class="text-center text-base leading-4">{{ shortDay }}</h2>

    <div class="flex flex-col h-full justify-center">
      <ul
        class="flex flex-col text-xs text-left"
        v-if="workout.data">
        <SplitItem
          v-for="(split, idx) in workout.data.details.slice(0, 2)"
          :key="`rep-${idx}`"
          :split="split"
          hideRest />
      </ul>
      <div
        v-if="!workout.data"
        class="text-slate-400">
        OFF
      </div>
      <span
        v-else-if="workout.data.details?.length > 2"
        class="text-center text-xs text-slate-300 leading-3">
        ...
      </span>
    </div>
  </div>
</template>
