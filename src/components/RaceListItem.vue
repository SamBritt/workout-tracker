<script setup lang="ts">
import { useAppStore } from '@/stores/AppStore'
import Avatar from './Avatar.vue'
import type { Race } from '@/types/race';

const appStore = useAppStore()

const props = defineProps<{
  race: Race
}>()
</script>

<template>
  <tr
    class="mb-2 bg-slate-700 p-2 hover:bg-slate-700/60 hover:cursor-pointer rounded-lg transition-all">
    <td class="bg-slate-900/75 sm:p-8">
      <p class="font-medium text-slate-300 text-lg md:text-2xl whitespace-nowrap">{{ race.title }}</p>
      <p class="font-light text-slate-300 text-sm whitespace-nowrap">{{ race.subTitle }}</p>
    </td>

    <td class="p-4">
      <div class="flex items-center relative h-auto w-auto">
        <!-- <Avatar v-for="n of 6" :class="`absolute left-${n} z-${n}0`"/> -->
        <Avatar class="absolute left-0"/>
        <Avatar class="absolute left-3"/>
        <Avatar class="absolute left-6"/>
        <Avatar class="absolute left-9"/>
        <Avatar class="absolute left-12"/>
      </div>
    </td>

    <td class="">
      <p class="font-medium text-slate-300">{{ race.date }}</p>
    </td>

    <td class="">
      <p class="font-medium text-slate-300">{{ race.start }} - {{ race.end }} CST</p>
    </td>

    <td class="">
      <p class="font-medium text-slate-300">{{ race.location.address }}, {{ race.location.zip }}</p>
    </td>
  </tr>
</template>

<style></style>
