import { defineStore } from 'pinia'
import { computed, ref, reactive } from 'vue'

export const useUserStore = defineStore('user', () => {
  const firstName = ref('Samuel')
  const lastName = ref('Britt')
  const accountType = ref('admin')

  return { firstName, lastName, accountType }
})
