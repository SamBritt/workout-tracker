<script setup lang="ts">
import type { Workout } from '@/types/workout';

const props = defineProps<{
  workout: Workout,
  id: number,
  current: boolean
}>()
</script>

<template>
  <div
    @click="$emit('select', workout)"
    :class="[
      'flex flex-col items-center border-2 border-slate-700 bg-slate-700 rounded-md p-2 w-36 h-20 min-w-max hover:cursor-pointer',
      { 'opacity-50': current },
      { 'border-2 border-green-400': current }
    ]">
    <h2 class="text-center text-base">{{ workout.day }}</h2>
    <ul
      class="text-xs text-left"
      v-if="workout.details">
      <li v-for="reps in workout.details">
        <span v-if="reps.reps">{{ reps.reps }} x </span>
        <span>{{ reps.distance }}{{ reps.length }}</span>
        <span v-if="reps.pace"> @ {{ reps.pace }}{{ reps.paceType }}</span>
      </li>
    </ul>
    <div v-else>OFF</div>
  </div>
</template>
