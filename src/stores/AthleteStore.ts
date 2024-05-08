import { Athlete } from '@/types/athlete'
import { defineStore } from 'pinia'
import { computed, ref, reactive, Ref } from 'vue'

export const useAthleteStore = defineStore('athlete', () => {
  const athletes: Ref<Athlete[]> = ref([
    {
      id: '1',
      firstName: 'James',
      lastName: 'Wilson',
      class: 'Senior',
      weeklyMileage: 60,
      monthlyMileage: 80
    },
    {
      id: '2',
      firstName: 'Mark',
      lastName: 'Belbor',
      class: 'Junior',
      weeklyMileage: 50,
      monthlyMileage: 40
    },
    {
      id: '3',
      firstName: 'Sam',
      lastName: 'Harold',
      class: 'Freshman',
      weeklyMileage: 35,
      monthlyMileage: 20
    },
  ])

  const currentAthlete: Ref<Athlete> = ref({
    id: '',
    firstName: '',
    lastName: '',
    class: '',
    weeklyMileage: 0,
    monthlyMileage: 0
  })

  const setCurrentAthlete = (athlete: Athlete) => {
    currentAthlete.value = athlete
  }

  return { athletes, currentAthlete, setCurrentAthlete }
})
