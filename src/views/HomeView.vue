<script setup lang="ts">
import { computed, onBeforeMount, ref } from 'vue'
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
import Avatar from '@/components/Avatar.vue'
// ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const currentDate = ref(new Date())
const activeDetailView = ref('')
const workoutStore = useWorkoutStore()
const userStore = useUserStore()
const { firstName, lastName } = storeToRefs(userStore)
const { workouts, weeklyWorkouts, currentWorkout, weeklyMileage, daysOff, loadingWorkouts } =
  storeToRefs(workoutStore)

onBeforeMount(() => {
  workoutStore.fetchWorkouts()
})

const year = computed(() => currentDate.value.getFullYear())
const month = computed(() => currentDate.value.toLocaleString(undefined, { month: 'long' }))
const day = computed(() => currentDate.value.getDate())
const dayName = computed(() => currentDate.value.toLocaleString(undefined, { weekday: 'long' }))

const chartView = ref({
  mode: 'month',
  start: '',
  end: ''
})

const chartData = computed(() => {
  return {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ],
    datasets: [{ data: [0, 5, 25, 28, 30, 28, 30, 34] }]
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
        beginAtZero: true,
        min: 0,
        max: 50,
        ticks: {
          stepSize: 1
        },
        grid: {
          display: false
        } // Keep other y-axis options here if needed
      }
    }
  }
})

const chartStyles = computed(() => {
  return {
    height: 'auto',
    position: 'relative',
    display: 'flex'
  }
})

const detailsViewProps = computed(() => {
  return {
    workout: currentWorkout.value
  }
})

const selectWorkout = (workout: Workout) => {
  workoutStore.setCurrentWorkout(workout)
}

const detailView = {
  AdvancedRun: AdvancedRun,
  QuickRun: QuickRun
}
</script>

<template>
  <div class="space-y-6">
    <section class="flex items-end justify-center gap-2">
      <Avatar
        :first="firstName"
        :last="lastName" />
      <h1 class="flex text-5xl text-gray-200 text-center leading-10">
        {{ firstName }} {{ lastName }}
      </h1>
    </section>
    <!-- Chart -->
    <div class="flex flex-col gap-6">
      <section class="flex flex-col sm:flex-row">
        <div
          class="flex flex-col bg-slate-700/20 rounded-l-md text-slate-200 order-2 sm:order-none">
          <h4 class="p-8 text-center">Filter</h4>
          <div class="px-8">
            <div class="flex gap-4">
              <button>-</button>
              <p>Month</p>
              <button>+</button>
            </div>
          </div>
        </div>

        <div class="relative bg-slate-700 h-96 min-h rounded-r-md p-8 w-full">
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
      </section>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-2">
        <StatTile
          value="0"
          label="miles /wk"
          :total="weeklyMileage" />
        <StatTile
          value="25"
          label="miles /mo"
          total="80" />

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

    <WeeklyReport
      @select="selectWorkout"
      :workouts="weeklyWorkouts" />

    <div class="flex flex-col sm:flex-row">
      <!-- <QuickRun @save="addRun" /> -->
      <DailyDetails
        v-if="!loadingWorkouts"
        :workout="currentWorkout" />

      <div
        class="flex flex-col bg-slate-700/20 rounded-r-md text-slate-200 order-2 sm:order-none w-32 hover:w-36 h-60 min-h-fit min-w-fit p-4 transition-all">
        <div
          class="flex flex-col justify-evenly w-full h-full"
          v-if="!activeDetailView">
          <button
            class="opacity-75 hover:opacity-100 h-full hover:text-md transition-all"
            @click="() => (activeDetailView = 'QuickRun')">
            Run
          </button>
          <hr class="border-slate-400" />
          <button
            class="opacity-75 hover:opacity-100 h-full hover:text-md transition-all"
            @click="() => (activeDetailView = 'AdvancedRun')">
            Workout
          </button>
        </div>

        <template v-else>
          <button
            class="w-fit"
            @click="() => (activeDetailView = '')">
            back
          </button>
          <component
            :is="detailView[activeDetailView]"
            v-bind="detailsViewProps" />
        </template>
      </div>
    </div>

    <div class="flex flex-col sm:flex-row gap-6">
      <Goals />
      <RunList :list="workouts" />
    </div>
  </div>
</template>
