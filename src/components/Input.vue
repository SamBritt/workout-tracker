<script setup lang="ts">
const props = defineProps({
  type: {
    type: String,
    default: 'text'
  },
  name: {
    type: String,
    required: true
  }
})
</script>

<template>
  <input
    :id="`${name}-input`"
    :name="`${name}-input`"
    :type="type"
    placeholder="0"
    class="text-slate-700 bg-gray-200 px-2 rounded-sm" />
</template>
