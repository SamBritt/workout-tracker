<script setup lang="ts">
import { computed, onBeforeMount, reactive, ref } from 'vue'

import Heading from '@/components/Heading.vue'

const now = ref(new Date())
const day = computed(() => now.value.getDay())

</script>

<template>
  <div class="flex flex-col w-full border-2 bg-gray-200 rounded-md px-4 py-2">
    <Heading>Weekly Report</Heading>

    <div class="grid grid-cols-7 gap-1">
      <div 
      v-for="n, idx of 7"
      :class="['border-2 border-slate-700 rounded-md p-2', {'opacity-50': idx + 1 < day }]">
        <h2 class="text-center text-base">Monday</h2>
        <ul class="text-sm">
            <li> 4 x 400m @ 60sec</li>
            <li> 2 x 800m @ 2:20</li>
            <li> 1 x 1mi @ 5:00</li>
        </ul>
      </div>
    </div>
  </div>
</template>
