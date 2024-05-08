import { defineStore } from 'pinia'
import { computed, ref, reactive } from 'vue'

export const useAppStore = defineStore('app', () => {
  const modal = ref({
      current: '',
      show: false,
      from: ''
  })
  const menu = ref({
      current: 'AthleteDetails',
      show: false,
      from: ''
  })

  const toggleModal = (current, show, from = '') => {
    modal.value.current = current
    modal.value.show = show
    modal.value.from = from
  }

  const toggleMenu = (current, show, from = '') => {
    menu.value.current = current
    menu.value.show = show
    menu.value.from = from
  }

  return { modal, menu, toggleModal, toggleMenu }
})
