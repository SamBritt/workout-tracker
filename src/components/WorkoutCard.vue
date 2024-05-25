<script setup lang="ts">
import { Workout } from '@/types/workout'

const { workout } = defineProps<{
  workout: Workout
}>()
</script>
<template>
  <section class="relative flex w-48 min-w-fit min-h-fit bg-slate-700 p-4 rounded-md hover:cursor-pointer hover:scale-95 hover:shadow-sky-400/25 shadow-md translate-all ease duration-100">
    <!-- <div
      class="absolute flex items-center justify-center w-4 h-4 bg-yellow-400 ring-slate-600ring rounded-tr-md shadow-inner shadow-gray-800"> -->
      <!-- <div class="w-6 h-6 rounded-full bg-indigo-500"></div> -->
    <!-- </div> -->
    <div class="">
      <h4 class="text-2xl font-medium text-slate-200">{{ workout.name }}</h4>
      <p class="bg-slate-600 rounded-xl px-2 py-px w-fit text-sm leading-3 text-slate-200">{{ workout.type }}</p>

    </div>

    <div class="text-slate-300">
    </div>
  </section>
</template>
