import type { DayOff, Workout, WorkoutScheduled } from '@/types/workout'
import { defineStore } from 'pinia'
import { computed, ref, type Ref } from 'vue'
import { areDatesEqual, getMondaysDate, getSundaysDate, shortDate } from '@/utility/dates'
import { afterToday } from '@/utility/dates'
import { getWorkouts } from '@/api/workout'

export const useWorkoutStore = defineStore('workout', () => {
  const workouts: Ref<Workout[]> = ref([])
  const loadingWorkouts = ref(false)

  const days = ref(['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'])

  const schedule = computed<string[]>(() => {
    const monday = getMondaysDate()
    const arr: string[] = []
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
  const weeklyWorkouts = computed<WorkoutScheduled[]>((type = 'week') => {
    const monday = getMondaysDate()

    return schedule.value.map((currentDay, idx) => {
      const workoutEntry =
        workouts.value.find((item) => {
          const workoutDay = new Date(item.date).getDay()
          console.log(areDatesEqual(item.date, currentDay))
          return areDatesEqual(item.date, currentDay)
        }) || []

      return {
        ...((workoutEntry ? { ...workoutEntry } : {}) as Workout),
        day: currentDay
      }
    })
  })
  const afterMonday = computed(() => {
    console.log(getSundaysDate())
    return workouts.value.filter((workout) => new Date(workout.date) >= new Date(getMondaysDate()))
  })

  const weeklyMileage = computed((type = 'week') => {
    const metersToMilesConversionFactor = 1 / 1609.34

    const arr = workouts.value.filter((workout) => {
      return (
        new Date(workout.date) >= new Date(getMondaysDate()) &&
        new Date(workout.date) <= new Date(getSundaysDate())
      )
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

        const total = (workout.warmup && workout.cooldown) || 0
        return total + totalDistanceInMeters + total
      }
      return total
    }, 0)

    return totalDistanceInMiles.toFixed(1)
  })

  const daysOff = computed(() => weeklyWorkouts.value.filter((workout) => !workout.details).length)

  const fetchWorkouts = () => {
    loadingWorkouts.value = true

    getWorkouts()
      .then((wo) => {
        workouts.value = wo
        setCurrentWorkout(getCurrentWorkout())
      })
      .catch((e) => console.log(e))
      .finally(() => loadingWorkouts.value = false)
  }

  const getCurrentWorkout = (): WorkoutScheduled => {
    const current = weeklyWorkouts.value.find((item) => {
      return areDatesEqual(new Date(), item.day as string)
    })

    console.log('current', current)
    console.log('workouts', weeklyWorkouts.value)

    return current ? current : ({ day: schedule.value[new Date().getDay()] } as DayOff)
  }

  const currentWorkout: Ref<WorkoutScheduled> = ref(getCurrentWorkout())

  const setCurrentWorkout = (workout: WorkoutScheduled) => {
    currentWorkout.value = workout
  }

  return {
    afterMonday,
    workouts,
    schedule,
    loadingWorkouts,
    currentWorkout,
    weeklyWorkouts,
    setCurrentWorkout,
    fetchWorkouts,
    weeklyMileage,
    daysOff
  }
})
