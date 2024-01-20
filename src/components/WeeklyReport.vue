<script setup lang="ts">
import { computed, onBeforeMount, reactive, ref } from 'vue'

import Heading from '@/components/Heading.vue'

const now = ref(new Date())
const day = computed(() => now.value.getDay())
const days = ref(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'])
</script>

<template>
  <div>
    <Heading>Weekly Report</Heading>

    <div class="flex gap-1 overflow-auto">
      <div
        v-for="(n, idx) of 7"
        :class="[
          'border-2 border-slate-700 rounded-md p-2 w-36 min-w-max',
          { 'opacity-50': idx + 1 < day }
        ]">
        <h2 class="text-center text-base">{{ days[idx] }}</h2>
        <ul class="text-sm">
          <li>4 x 400m @ 60sec</li>
          <li>2 x 800m @ 2:20</li>
          <li>1 x 1mi @ 5:00</li>
        </ul>
      </div>
    </div>
  </div>
</template>
