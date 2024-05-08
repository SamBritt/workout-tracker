import { Race } from '@/types/race'
import { defineStore } from 'pinia'
import { computed, ref, reactive, Ref } from 'vue'

export const useRaceStore = defineStore('race', () => {
  const races: Ref<Race[]> = ref([
    {
      id: '1',
      title: 'Nike Grand Prix',
      subTitle: 'XC Regionals',
      date: 'May, 8th, 2024',
      start: '4:30pm',
      end: '8:30pm',
      location: {
        address: '2351 Nike Ln',
        zip: '37092'
      }
    },
  ])

  const currentRace: Ref<Race> = ref({
    id: '',
    title: '',
    subTitle: '',
    date: '',
    start: '',
    end: '',
    location: {
      address: '',
      zip: ''
    }
  })

  const setCurrentRace = (race: Race) => {
    currentRace.value = race
  }

  return { races, currentRace, setCurrentRace }
})