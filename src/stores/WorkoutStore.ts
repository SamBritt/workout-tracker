import type { Workout } from '@/types/workout'
import { defineStore } from 'pinia'
import { computed, ref, type Ref } from 'vue'
import { areDatesEqual, getMondaysDate, getSundaysDate, shortDate } from '@/utility/dates'
import { afterToday } from '@/utility/dates'

export const useWorkoutStore = defineStore('workout', () => {
  const workouts = ref([
    {
      id: 1,
      date: 'May 6 2024',
      name: "Fast 4's",
      type: 'speed',
      warmup: 1,
      cooldown: 1,
      warmupType: 'mi',
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
      date: 'May 9 2024',
      name: undefined,
      type: 'run',
      warmup: 0,
      cooldown: 0,
      warmupType: '',
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
      date: 'May 8 2024',
      name: undefined,
      warmup: 1,
      cooldown: 1,
      warmupType: 'mi',
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
    }
  ])

  const days = ref(['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'])
  const schedule = computed(() => {
    const monday = getMondaysDate()
    const arr = []
    Array.from({ length: 7 }).forEach((_, idx) => {
      const d = new Date(monday)
      d.setDate(new Date(monday).getDate() + idx)

      // console.log(shortDate(d.setDate(monday)))
      arr.push(shortDate(d))
    })
    return arr
  })
  /**
   * schedule for the current week
   */
  const weeklyWorkouts = computed((type = 'week') => {
    const monday = getMondaysDate()

    return schedule.value.map((day, idx) => {
      const workoutEntry = workouts.value.find((item) => {
        const workoutDay = new Date(item.date).getDay()
        console.log(areDatesEqual(item.date, day))
        return areDatesEqual(item.date, day)
      })

      return {
        day,
        ...((workoutEntry ? { ...workoutEntry } : {}) as Workout)
      }
    })
  })
  const afterMonday = computed(() => {
    console.log(getSundaysDate())
    return workouts.value.filter(workout => new Date(workout.date) >= new Date(getMondaysDate()) )
  })

  const weeklyMileage = computed((type = 'week') => {
    const metersToMilesConversionFactor = 1 / 1609.34

    
    const arr = workouts.value.filter(workout => {
      return new Date(workout.date) >= new Date(getMondaysDate())
        && new Date(workout.date) <= new Date(getSundaysDate())
    })

    const totalDistanceInMiles = arr.reduce((total, workout) => {
      if (workout.details) {
        const totalDistanceInMeters = workout.details.reduce((workoutTotal, entry) => {
          const reps = entry.reps !== undefined ? entry.reps : 1
          const distance = entry.distance !== undefined ? entry.distance : 0
          const lengthUnit = entry.length || 'm' // Assuming 'm' if not specified

          const lengthConversionFactor = lengthUnit === 'mi' ? 1 : metersToMilesConversionFactor

          return workoutTotal + reps * distance * lengthConversionFactor
        }, 0)
        console.log(workout)

        return total + totalDistanceInMeters + workout.warmup + workout.cooldown
      }
      return total
    }, 0)

    return totalDistanceInMiles.toFixed(1)
  })

  const monthlyMileage = computed(() => {})
  const daysOff = computed(() => weeklyWorkouts.value.filter(workout => !workout.details).length)

  const getCurrentWorkout = () => {
    const current = weeklyWorkouts.value.find((item) => {
      return areDatesEqual(new Date(), item.day)
    })

    return current ? current : { day: schedule.value[new Date().getDay()] }
  }

  const currentWorkout: Ref<Workout | { day: string }> = ref(getCurrentWorkout())

  function setCurrentWorkout(workout: Workout) {
    currentWorkout.value = workout
  }

  return { afterMonday, workouts, schedule, currentWorkout, weeklyWorkouts, setCurrentWorkout, weeklyMileage, daysOff }
})
