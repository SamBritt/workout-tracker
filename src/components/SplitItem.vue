<script setup lang="ts">
import { WorkoutDetail } from '@/types/workout'

const { hideRest = false, element = 'li' } = defineProps<{
  split: WorkoutDetail
  hideRest?: boolean
  element?: 'li' | 'span'
}>()
</script>

<template>
  <component
    :is="element"
    class="leading-3">
    <div>
      <span class="text-slate-200">{{ split.reps }}</span>

      <span
        v-if="split.reps"
        class="text-xs text-slate-400">
        &nbsp;x&nbsp;
      </span>

      <span class="text-slate-200">{{ split.distance }}</span>

      <span>{{ split.length }}</span>

      <span v-if="split.pace" class="text-xs text-slate-400">&nbsp;@&nbsp;</span>

      <span>{{ split.pace }}{{ split.paceType }}</span>
    </div>

    <div
      class="text-slate-400 indent-1"
      v-if="split.rest && !hideRest">
      <span class="text-xs text-slate-300">{{ split.rest }}</span>
      <span class="text-xs">{{ split.restType }} rest</span>
    </div>
  </component>
</template>
