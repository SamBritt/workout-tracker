import { defineStore } from 'pinia'
import { computed, ref, reactive } from 'vue'

export const useUserStore = defineStore('user', () => {
  const state = reactive({
    firstName: 'Samuel',
    lastName: 'Britt',
    accountType: 'admin'
  })

  return { state }
})
