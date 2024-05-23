import type { User } from './user'

export interface Athlete extends User {
  class?: string
  weeklyMileage: number
  monthlyMileage: number
}

export interface ManagedAthlete extends Athlete {
  coachId: string
}
