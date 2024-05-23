<script setup lang="ts">
import type { WorkoutScheduled } from '@/types/workout'
import VButton from './VButton.vue'
import SplitItem from './SplitItem.vue'
import { ref, watch } from 'vue'

const { workout } = defineProps<{
  workout: WorkoutScheduled
}>()

const showEditButtons = ref(false)
const toggleEditButtons = () => {
  showEditButtons.value = !showEditButtons.value
}

watch(
  () => workout,
  () => {
    showEditButtons.value = false
  }
)
</script>

<template>
  <section
    :class="[
      { 'shadow shadow-green-300/75': workout.completed },
      'flex flex-col items-center bg-slate-700 p-4 rounded-md w-96 transition-all'
    ]">
    <div class="flex w-full justify-between items-center">
      <p
        :class="[
          'w-3.5 h-3.5 rounded-full shadow-inner transition-all',
          workout.completed ? 'bg-green-300 shadow-emerald-900' : 'bg-gray-500 shadow-gray-900'
        ]"></p>

      <h2 class="text-xl text-slate-300">{{ workout.day }}</h2>

      <p
        class="text-sky-300 hover:cursor-pointer hover:text-sky-200"
        role="button"
        @click="toggleEditButtons()">
        Edit
      </p>
    </div>

    <div
      :class="[
        'flex flex-col justify-evenly gap-1 h-full w-full text-slate-300',
        workout.completed ? 'flex-row' : 'flex-col'
      ]"
      v-if="workout.details">
      <div class="flex justify-evenly items-center w-full h-full">
        <div>
          <span v-if="workout.warmup">{{ workout.warmup }}{{ workout.warmupType }} warmup</span>

          <ul class="flex flex-col gap-0.5">
            <SplitItem
              v-for="(item, idx) in workout.details"
              :split="item"
              :key="`item-${idx}`" />
          </ul>

          <span v-if="workout.cooldown">
            {{ workout.cooldown }}{{ workout.warmupType }} cooldown
          </span>
        </div>

        <div
          v-if="workout.completed"
          class="flex text-green-300 text-2xl">
          COMPLETE
        </div>
      </div>

      <div
        class="flex"
        v-if="showEditButtons">
        <VButton v-if="workout.completed">Undo</VButton>
        <VButton v-if="!workout.completed">Complete</VButton>
      </div>
    </div>

    <div
      v-if="!workout.details"
      class="h-full flex items-center">
      <h3 class="text-4xl text-slate-400">OFF</h3>
    </div>
  </section>
</template>
