import { Athlete } from './athlete'

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
  time: string
}
