<script setup lang="ts">
import { ref } from 'vue'

const opened = ref(false)
const selected = ref('')

const setSelected = (value: string) => {
  selected.value = value
}
</script>

<template>
  <div class="flex flex-col relative gap-1">
    <div
      class="flex cursor-pointer bg-gray-200 rounded-sm w-auto mb-1 px-1 text-gray-400"
      @click="() => (opened = !opened)">
      <p>{{ selected || 'select' }}</p>
    </div>

    <div
      v-show="opened"
      class="absolute cursor-pointer z-20 flex w-full bg-gray-200 rounded-sm hover:bg-gray-300 px-1 top-full transition-all shadow-md"
      @click="setSelected('hills')">
      <span class="w-full">hills</span>
    </div>
  </div>
</template>
