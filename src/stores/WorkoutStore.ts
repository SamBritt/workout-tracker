import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useWorkoutStore = defineStore('workout', () => {
  const workouts = ref([
    {
      id: 1,
      name: "Fast 4's",
      type: 'speed',
      details: [
        {
          reps: 6,
          distance: 400,
          length: 'meters',
          pace: 60,
          paceType: 'seconds',
          rest: 30,
          restType: 'seconds',
          actual: undefined
        }
      ]
    },
    {
      id: 2,
      name: undefined,
      type: 'run',
      details: [
        {
          reps: undefined,
          distance: 5,
          length: 'miles',
          pace: 7,
          paceType: 'minutes',
          rest: undefined,
          restType: undefined,
          actual: 35
        }
      ]
    },

  ])

  return { workouts }
})
