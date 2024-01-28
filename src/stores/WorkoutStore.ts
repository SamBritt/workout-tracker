import type { Workout } from '@/types/workout'
import { defineStore } from 'pinia'
import { computed, ref, type Ref } from 'vue'
import { areDatesEqual } from '@/utility/dates'

export const useWorkoutStore = defineStore('workout', () => {
  const workouts = ref([
    {
      id: 1,
      date: 'Jan 31 2024',
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
      date: 'Jan 29 2024',
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
      date: 'Jan 30 2024',
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
  
  const days = ref(['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'])
  
  /**
   * schedule for the current week
   */
  const weeklyWorkouts = computed(() => {
    const workoutsAfterToday = workouts.value.filter(wo => {
      const now = new Date()
      now.setHours(0, 0, 0, 0);
      return new Date(wo.date) >= now
    })
    return days.value.map((day, idx) => {
      const workoutEntry = workoutsAfterToday.find((item) => {
        const workoutDay = new Date(item.date).getDay()
        return days.value[workoutDay] === day
      })
  
      return {
        day,
        ...(workoutEntry ? { ...workoutEntry } : {}) as Workout
      }
    })
  })

  const getCurrentWorkout = () => {
    const current =  weeklyWorkouts.value.find(item => {
      return areDatesEqual(new Date(), item.date)
    })
    
    return current ? current : { day: days.value[new Date().getDay()]}
  }

  const currentWorkout: Ref<Workout | { day: string }> = ref(getCurrentWorkout())

  function setCurrentWorkout(workout: Workout) {
    currentWorkout.value = workout
  }

  

  return { workouts, currentWorkout, weeklyWorkouts, setCurrentWorkout }
})
