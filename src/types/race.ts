import type { Athlete } from './athlete'

export interface Race {
  id: string
  title: string
  subTitle?: string
  date: string
  start: string
  end: string
  location: {
    address: string
    zip: string
  }
  racingAthletes?: Athlete[]
  notes?: string
  results?: RaceResults
}

export interface RaceResults {
  id: string
  teamScore: number
  totalCompetetors: number
  data: Results[]
}

export interface Results {
  athlete: Athlete
  event: RaceType
  time: string
}

export type RaceType = '100m' | '200m' | '400m' | '800m' | '1500m' | '1600m' | 'mile' | '3k' | '3200m' | '2mi' | '5k' | '8k' | '10k' | 'half' | 'marathon'
