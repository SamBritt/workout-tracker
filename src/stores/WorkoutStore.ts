import type { Workout } from '@/types/workout'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useWorkoutStore = defineStore('workout', () => {
  const workouts = ref([
    {
      id: 1,
      date: 'Jan 25 2024',
      name: "Fast 4's",
      type: 'speed',
      details: [
        {
          reps: 6,
          distance: 400,
          length: 'm',
          pace: 60,
          paceType: 'sec',
          rest: 30,
          restType: 'sec',
          actual: undefined
        },
        {
          reps: 2,
          distance: 800,
          length: 'm',
          pace: '2:10',
          paceType: 'min',
          rest: 1,
          restType: 'min',
          actual: undefined
        }
      ]
    },
    {
      id: 2,
      date: 'Jan 26 2024',
      name: undefined,
      type: 'run',
      details: [
        {
          reps: undefined,
          distance: 5,
          length: 'mi',
          pace: 7,
          paceType: 'min',
          rest: undefined,
          restType: undefined,
          actual: 35
        }
      ]
    },
    {
      id: 3,
      date: 'Jan 22 2024',
      name: undefined,
      type: 'run',
      details: [
        {
          reps: undefined,
          distance: 5,
          length: 'mi',
          pace: undefined,
          paceType: undefined,
          rest: undefined,
          restType: undefined,
          actual: 35
        }
      ]
    },
  ])
  
  const currentWorkout = ref({})
  const days = ref(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'])
  
  const weeklyWorkouts = computed(() => {
    return days.value.map((day, idx) => {
      const workoutEntry = workouts.value.find((item) => {
        const workoutDay = new Date(item.date).getDay()
        return days.value[workoutDay] === day
      })
  
      return {
        day,
        ...(workoutEntry ? { ...workoutEntry } : {}) as Workout
      }
    })
  })

  function setCurrentWorkout(workout: Workout) {
    currentWorkout.value = workout
  }

  return { workouts, currentWorkout, weeklyWorkouts, setCurrentWorkout }
})
