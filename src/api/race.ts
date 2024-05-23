import type { Race } from '@/types/race'
import axios from 'axios'

export const getRaces = () => {
  return axios({
    url: `http://localhost:3000/races`,
    method: 'get'
  })
    .then((res) => {
      console.log(res)
      return res.data
    })
    .catch((e) => console.log(e))
}

export const addRace = (payload: Race) => {

  return axios({
    url: `http://localhost:3000/races`,
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    data: payload
  })
    .then((res) => res)
    .catch((e) => console.log(e))
}

// TODO
export const assignRace = (payload: Race) => {
  console.log('add races')

  return axios({
    url: `http://localhost:3000/races/assign`,
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    data: payload
  })
    .then((res) => res)
    .catch((e) => console.log(e))
}
