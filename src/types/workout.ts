export interface Workout {
  id: number
  day?: string
  date: string
  name: undefined
  type: string
  details: [
    {
      reps: number
      distance: number
      length: string
      pace: number
      paceType: string
      rest: number
      restType: undefined
      actual: number | string
    }
  ]
}
