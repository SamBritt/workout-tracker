export interface User {
  id: string
  firstName: string
  lastName: string
  email: string
  phone?: number
  accountType: AccountTypes
  tier?: 'free' | 'plus'
  address?: {
    streetOne: string
    streetTwo: string
    city: string
    state: string
    zip: string
  }
}

export type AccountTypes = 'superCoach' | 'coach' | 'athlete' | 'managedAthlete'