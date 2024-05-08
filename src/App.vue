<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import IconUser from '@/components/icons/IconUser.vue'
import Modal from './components/Modal.vue'
import SideMenu from './components/SideMenu.vue'
import AthleteDetails from '@/components/AthleteDetails.vue'
import { storeToRefs } from 'pinia'
import { useAppStore } from './stores/AppStore'
import { useUserStore } from './stores/UserStore'
import Avatar from './components/Avatar.vue'
import RaceDetails from './components/RaceDetails.vue'

const appStore = useAppStore()
const userStore = useUserStore()

const { state } = storeToRefs(userStore)
const { modal, menu } = storeToRefs(appStore)

const menus = {
  AthleteDetails: AthleteDetails
}

const modals = {
  AthleteDetails: AthleteDetails,
  RaceDetails: RaceDetails
}
</script>

<template>
  <header>
    <div class="wrapper flex justify-end mb-4">
      <nav
        class="flex gap-4 justify-center items-center bg-slate-700 text-slate-100 rounded-xl shadow-lg p-2 px-">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/coach">Coach</RouterLink>
        <Avatar :first="state.firstName" :last="state.lastName"/>
      </nav>
    </div>
  </header>

  <Modal
    v-if="modal.show"
    @close="appStore.toggleModal(modal.current, false)">
    <component :is="modals[modal.current]" />
  </Modal>

  <SideMenu
    v-if="menu.show"
    @close="appStore.toggleMenu(menu.current, false)">
    <component :is="menus[menu.current]" />
  </SideMenu>

  <main>
    <RouterView />
  </main>
</template>

<style scoped></style>
