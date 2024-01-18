<script setup lang="ts">
import { computed, onBeforeMount, reactive, ref } from 'vue'
import StatTile from '@/components/StatTile.vue'
import QuickRun from '@/components/QuickRun.vue'
import AdvancedRun from '@/components/AdvancedRun.vue'
import Goals from '@/components/Goals.vue'
import WeeklyReport from '@/components/WeeklyReport.vue'
import RunList from '@/components/RunList.vue'
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
import 'chart.js/auto'
// ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const workouts = ref([])

const currentDate = ref(new Date())
const year = computed(() => currentDate.value.getFullYear())
const month = computed(() => currentDate.value.toLocaleString(undefined, { month: 'long' }))
const day = computed(() => currentDate.value.getDate())
const dayName = computed(() => currentDate.value.toLocaleString(undefined, { weekday: 'long' }))

const chartData = computed(() => {
  return {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [{ data: [25, 28, 30, 28, 30, 34] }]
  }
})
const chartOptions = computed(() => {
  return {
    responsive: true,
    maintainAspectRatio: false,
    cubicInterpolationMode: 'monotone',
    layout: {
      padding: 30
    },
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        grid: {
          display: false
        } // Keep other y-axis options here if needed
      }
    }
  }
})

const chartStyles = computed(() => {
  return {
    width: '100%',
    height: 'auto',
    position: 'relative',
    display: 'flex'
  }
})
const addRun = (time: number) => {
  console.log('dd', time)
  workouts.value.push(time)
}
</script>

<template>
  <main class="space-y-6">
    <!-- Chart -->
    <div class="flex flex-col lg:flex-row gap-4">
      <div class="relative bg-gray-200 w-full h-60 rounded-md p-4">
        <div class="text-center">
          <div class="text-2xl font-light text-slate-700">
            {{ dayName }}
            {{ month }}
            {{ day }}
            {{ year }}
          </div>
        </div>
        <Line
          class="flex w-full"
          :style="chartStyles"
          id="my-chart-id"
          :options="chartOptions"
          :data="chartData" />
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

    <WeeklyReport/>

    <div class="flex flex-col sm:flex-row gap-6">
      <QuickRun @save="addRun" />
      <AdvancedRun />
    </div>

    <div class="flex flex-col sm:flex-row gap-6">
      <Goals />
      <RunList :list="workouts" />
    </div>
  </main>
</template>
