import type { Workout } from '@/types/workout'
import axios from 'axios'

export const getWorkouts = () => {
  console.log('get workouts')

  return axios({
    url: `http://localhost:3000/workouts`,
    method: 'get'
  })
    .then((res) => res)
    .catch((e) => console.log(e))
}

export const addWorkout = (payload: Workout) => {
  console.log('add workouts')

  return axios({
    url: `http://localhost:3000/workouts`,
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    data: payload
  })
    .then((res) => res)
    .catch((e) => console.log(e))
}

// TODO 
export const assignWorkout = (payload: Workout) => {
    console.log('add workouts')
  
    return axios({
      url: `http://localhost:3000/workouts/assign`,
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      data: payload
    })
      .then((res) => res)
      .catch((e) => console.log(e))
  }
