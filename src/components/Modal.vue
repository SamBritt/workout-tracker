<script setup lang="ts">
const emit = defineEmits(['close'])

const close = () => {
  emit('close')
}
</script>

<template>
  <Teleport to="#menu-port">
    <Transition
      name="slide"
      appear>
      <div class="fixed z-30 top-0 left-0 h-full w-full bg-black/25">
        <div
          class="flex flex-col absolute z-50 bg-slate-700 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 opacity-100 p-6 rounded-sm">
          <button @click="close">Close</button>
          <slot />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped lang="scss"></style>
