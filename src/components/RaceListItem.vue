<script setup lang="ts">
import { useAppStore } from '@/stores/AppStore'
import Avatar from './Avatar.vue'

const appStore = useAppStore()
</script>

<template>
  <tr
    class="mb-2 bg-slate-700 p-2 hover:bg-slate-700/60 hover:cursor-pointer">
    <td class="bg-slate-800 sm:p-8">
      <p class="font-medium text-slate-300 text-lg md:text-2xl whitespace-nowrap">Nike Grand Prix</p>
      <p class="font-light text-slate-300 text-sm whitespace-nowrap">XC Regionals</p>
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
      <p class="font-medium text-slate-300">May 8th, 2024</p>
    </td>

    <td class="">
      <p class="font-medium text-slate-300">4:30pm - 8:00pm CST</p>
    </td>

    <td class="">
      <p class="font-medium text-slate-300">2351 Nike Ln.</p>
    </td>
  </tr>
</template>

<style></style>
