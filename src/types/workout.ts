export interface Workout extends WorkoutInfo{
  id: number
  name?: string
  type: string
  details: WorkoutDetail[]
}

export interface WorkoutInfo {
  day: Day
  date: string
  warmup?: number
  cooldown?: number
  warmupType?: string
}

export interface WorkoutDetail {
  reps?: number
  distance: number
  length: string
  pace?: number
  paceType: string
  rest?: number
  restType?: string
  actual?: number
}

export type Day = string

export type ExcludedInfo = Omit<WorkoutInfo, 'day'>

export type DayOff = { day: Day, details?: never, } & {
  [K in Exclude<keyof ExcludedInfo, 'day'>]: never;
};

export type WorkoutScheduled = Workout | DayOff

export type Schedule = Array<WorkoutScheduled>