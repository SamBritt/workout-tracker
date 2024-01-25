<script setup lang="ts">
const props = defineProps({
  label: {
    type: String
  },
  current: {
    type: Number
  },
  id: Number
})
</script>

<template>
  <div
    :class="[
      'flex flex-col items-center border-2 border-slate-700 bg-slate-700 rounded-md p-2 w-36 min-w-max',
      { 'opacity-50': id + 1 < current },
      { 'border-2 border-green-400' : current === id + 1}
    ]">
    <h2 class="text-center text-base">{{ label }}</h2>
    <ul class="text-xs text-left">
      <li>4 x 400m @ 60sec</li>
      <li>2 x 800m @ 2:20</li>
      <li>1 x 1mi @ 5:00</li>
    </ul>
  </div>
</template>
