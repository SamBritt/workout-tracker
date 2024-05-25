import type { Race } from './race'

export interface Workout extends WorkoutInfo {
  id: string
  name: string
  type: string
  details: WorkoutDetail[]
}

export interface WorkoutInfo {
  day: Day
  date: string
  warmup?: number
  cooldown?: number
  warmupType?: string
  completed?: boolean
}

export interface WorkoutDetail {
  reps?: number
  distance: number
  length: string
  pace?: number | string
  paceType?: string
  rest?: number
  restType?: string
  actual?: number
}

export type ExcludedInfo = Omit<WorkoutInfo, 'day'>

export type Day = string

export type DayOff = { day: Day; details?: never } & {
  [K in Exclude<keyof ExcludedInfo, 'day'>]: never
}

// export type WorkoutScheduled = Workout | Race
export interface ScheduleItem {
  day: string
  data?: Workout
}
export type Schedule = Array<ScheduleItem>
