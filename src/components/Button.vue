<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary'
  }
})

const buttonStyles = computed(() => {
  const styles = [
    `w-full`,
    `text-slate-100`,
    `border-2`,
    `rounded-md`,
    `py-1`,
    `px-2`,
    'transition-all'
  ]

  switch (props.variant) {
    case 'primary':
      styles.push('bg-slate-700', 'active:bg-slate-800')
      break
    case 'outline':
      styles.push('border-slate-700', 'text-slate-700', 'active:border-slate-800')
      break
  }

  return styles
})
</script>

<template>
  <button :class="buttonStyles"><slot /></button>
</template>
