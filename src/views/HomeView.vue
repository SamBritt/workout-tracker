<script setup lang="ts">
import { computed, onBeforeMount, reactive, ref } from 'vue'
import StatTile from '@/components/StatTile.vue'
import QuickRun from '@/components/QuickRun.vue'
import AdvancedRun from '@/components/AdvancedRun.vue'
import Goals from '@/components/Goals.vue'
import WeeklyReport from '@/components/WeeklyReport.vue'
import DailyDetails from '@/components/DailyDetails.vue'
import RunList from '@/components/RunList.vue'
import { Line } from 'vue-chartjs'
import { useWorkoutStore } from '@/stores/WorkoutStore'
import 'chart.js/auto'
import { storeToRefs } from 'pinia'
import type { Workout } from '@/types/workout'
import { useUserStore } from '@/stores/UserStore'
// ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const currentDate = ref(new Date())

const store = useWorkoutStore()
const userStore = useUserStore()
const { state } = storeToRefs(userStore)
const { workouts, weeklyWorkouts, currentWorkout, weeklyMileage, daysOff } = storeToRefs(store)

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

const selectWorkout = (workout: Workout) => {
  store.setCurrentWorkout(workout)
}
</script>

<template>
  <div class="space-y-6">
    <div>
      <h1 class="text-8xl text-gray-200 text-center">Samuel Britt</h1>
    </div>
    <!-- Chart -->
    <div class="flex flex-col gap-6">
      <div class="relative bg-slate-700 h-60 rounded-md p-4">
        <div class="text-center">
          <div class="text-2xl font-light text-gray-300">
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

      <div class="grid grid-cols-2 md:grid-cols-4 gap-2">
        <StatTile
          value="0"
          label="miles /wk"
          :total="weeklyMileage" />
        <StatTile
          value="25"
          label="miles /mo" />

        <StatTile
          value="2"
          label="Days Ran"
          total="7" />
        <StatTile
          :value="daysOff"
          label="Days Off"
          total="7" />
      </div>
    </div>

    <WeeklyReport @select="selectWorkout" :workouts="weeklyWorkouts"/>

    <div class="flex flex-col sm:flex-row gap-6">
      <!-- <QuickRun @save="addRun" /> -->
      <DailyDetails :workout="currentWorkout"/>
      <AdvancedRun />
    </div>

    <div class="flex flex-col sm:flex-row gap-6">
      <Goals />
      <RunList :list="workouts" />
    </div>
  </div>
</template>
