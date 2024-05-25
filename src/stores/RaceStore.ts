import type { Race } from '@/types/race'
import { defineStore } from 'pinia'
import { computed, ref, reactive, type Ref } from 'vue'

export const useRaceStore = defineStore('race', () => {
  const races: Ref<Race[]> = ref([])

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
