<script setup lang="ts">
import type { Workout } from '@/types/workout'

const props = defineProps<{
  workout: Workout | { day: string; details?: never }
}>()
</script>

<template>
  <div class="flex flex-col items-center gap-1 bg-slate-700 py-2 px-4 rounded-md w-1/2">
    <h2 class="text-xl text-slate-300">{{ workout.day }}</h2>

    <div
      class="flex flex-col gap-1 text-slate-300"
      v-if="workout.details">

      <span v-if="workout.warmup">{{ workout.warmup }}{{ workout.warmupType }} warmup</span>

      <ul class="flex flex-col gap-0.5">
        <li
          v-for="item in workout.details"
          class="leading-4">
          <div>
            <span>{{ item.reps }}</span>
            <span
              v-if="item.reps"
              class="text-xs text-slate-400">
              &nbsp;x&nbsp;
            </span>
            <span>{{ item.distance }}{{ item.length }}</span>
            <span class="text-xs text-slate-400">&nbsp;@&nbsp;</span>
            <span>{{ item.pace }}{{ item.paceType }}</span>
          </div>
          <div
            class="text-slate-400"
            v-if="item.rest">
            <span class="text-xs">{{ item.rest }}</span>
            <span class="text-xs">{{ item.restType }} rest</span>
          </div>
        </li>
      </ul>

      <span v-if="workout.cooldown">{{ workout.cooldown }}{{ workout.warmupType }} cooldown</span>
    </div>

    <div v-else>
      <h3 class="text-3xl text-slate-300">OFF</h3>
    </div>
  </div>
</template>
