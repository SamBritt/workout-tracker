<script setup lang="ts">
import { computed, onBeforeMount, ref } from 'vue'
import StatTile from '@/components/StatTile.vue'
import QuickRun from '@/components/QuickRun.vue'
import AdvancedRun from '@/components/AdvancedRun.vue'
import Goals from '@/components/Goals.vue'
import RunList from '@/components/RunList.vue'

const currentDate = ref(new Date())
const year = computed(() => currentDate.value.getFullYear())
const month = computed(() => currentDate.value.toLocaleString(undefined, { month: 'long' }))
const day = computed(() => currentDate.value.getDate())
const dayName = computed(() => currentDate.value.toLocaleString(undefined, { weekday: 'long' }))
</script>

<template>
  <main class="space-y-6">
    <!-- Chart -->
    <div class="flex flex-col lg:flex-row gap-4">
      <div class="bg-gray-200 w-full h-60 rounded-md p-4">
        <div class="text-center">
          <div class="text-2xl font-light text-slate-700">
            {{ dayName }}
            {{ month }}
            {{ day }}
            {{ year }}
          </div>
        </div>
      </div>

      <div class="flex justify-center gap-2 w-1/2">
        <StatTile
          value="8"
          label="miles /wk"
          total="30" />
        <StatTile
          value="25"
          label="miles /mo" />

        <StatTile
          value="2"
          label="Days Ran"
          total="7" />
        <StatTile
          value="5"
          label="Days Off"
          total="7" />
        <!-- <span class="flex items-end gap-1 text-zinc-300">
          <span class="text-amber-300 text-xl">8</span>
          of
          <span class="text-amber-300 text-xl">30</span>
          miles this week
        </span>

        <span class="flex items-end gap-1 text-zinc-300">
          <span class="text-amber-300 text-xl">25</span>
          of
          <span class="text-amber-300 text-xl">120</span>
          miles this month
        </span> -->
      </div>
    </div>

    <div class="flex flex-col sm:flex-row gap-6">
      <QuickRun />
      <AdvancedRun />
    </div>
    <div class="flex flex-col sm:flex-row gap-6">
      <Goals />
      <RunList />
    </div>
  </main>
</template>
