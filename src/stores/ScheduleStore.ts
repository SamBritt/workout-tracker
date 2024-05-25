import type { Schedule, ScheduleItem, Workout } from '@/types/workout'
import { areDatesEqual, getMondaysDate, shortDate } from '@/utility/dates'
import { defineStore, storeToRefs } from 'pinia'
import { computed, ref, reactive, type Ref } from 'vue'
import { useWorkoutStore } from './WorkoutStore'
import { useRaceStore } from './RaceStore'
import { getWorkouts } from '@/api/workout'
import { getRaces } from '@/api/race'
import type { Race } from '@/types/race'

export const useScheduleStore = defineStore('schedule', () => {
  const workoutStore = useWorkoutStore()
  const raceStore = useRaceStore()
  const { workouts } = storeToRefs(workoutStore)
  const { races } = storeToRefs(raceStore)

  const loadingSchedule = ref(false)

  const weeklyDays = computed<string[]>(() => {
    const monday = getMondaysDate()
    const arr: string[] = []
    Array.from({ length: 7 }).forEach((_, idx) => {
      const d = new Date(monday)
      d.setDate(new Date(monday).getDate() + idx)

      arr.push(shortDate(d))
    })
    return arr
  })

  const findWorkoutForDay = (array: Workout[], day: string) => {
    return array.find((item) => {
      return areDatesEqual(item.date, day)
    })
  }

  const weeklySchedule = computed<Array<ScheduleItem>>(() => {
    const monday = getMondaysDate()

    return weeklyDays.value.map((currentDay, idx) => {
      const workoutEntry = findWorkoutForDay(workouts.value, currentDay)

      const entry: ScheduleItem = {
        day: currentDay,
        data: workoutEntry
      }

      return entry
    })
  })

  const getCurrentSchedule = (): ScheduleItem => {
    const current = weeklySchedule.value.find((item) => {
      return areDatesEqual(new Date(), item.day)
    })

    return current ? current : { day: weeklyDays.value[new Date().getDay()] }
  }

  const mapRaceToWorkout = (races: Race[]): Workout[] => {
    const arr: Workout[] = races.map((race) => {
      return {
        id: race.id,
        name: race.title,
        type: 'race',
        day: race.date,
        date: race.date,
        completed: false,
        details: [
          {
            distance: 5000,
            length: 'm'
          }
        ]
      }
    })

    return arr
  }

  const fetchSchedule = () => {
    loadingSchedule.value = true
    getWorkouts().then((res) => {
      workouts.value = res
    })

    getRaces()
      .then((res) => {
        races.value = res

        const details = mapRaceToWorkout(res)
        console.log(details)
        workouts.value = workouts.value.concat(details)
        console.log(workouts.value)
      })
      .finally(() => {
        loadingSchedule.value = false
      })
  }

  const setCurrentSchedule = (item: ScheduleItem) => {
    currentSchedule.value = item
  }

  const currentSchedule: Ref<ScheduleItem> = ref(getCurrentSchedule())
  const daysOff = computed(() => weeklySchedule.value.filter((workout) => !!workout.data).length)

  return {
    loadingSchedule,
    fetchSchedule,
    weeklySchedule,
    currentSchedule,
    daysOff,
    setCurrentSchedule
  }
})
