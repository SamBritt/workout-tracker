<script setup lang="ts">
import { emit } from 'process';
import { computed, ref } from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: 'text'
  },
  name: {
    type: String,
    required: true
  },
  placeholder: {
    type: String,
    default: '00'
  },
  font: {
    type: String,
    default: null
  },
  modelValue: {}
})

const emit = defineEmits(['update:modelValue'])

const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})

const onChange = (event: Event, type: string) => {
  if (props.type === 'timer') {
    const numericValue = (event.target as HTMLInputElement).value.replace(/[^0-9]/g, '')
    if (Number(numericValue) < 0) {
      value.value = 0
    } else if (Number(numericValue) > 59) {
      value.value = 59
    } else if (Number(numericValue) < 10) {
      value.value = `0${numericValue}`
    } else if (numericValue.length >= 3) {
      value.value = numericValue.slice(-2)
      console.log(value.value)
    }
  }

  // emit('update:modelValue', value.value)
}

const inputStyles = computed(() => {
  const styles = [
    `flex`,
    `active:scale-105`,
    `focus:outline-none`,
    `text-center`,
    `text-slate-700`,
    `bg-gray-200`,
    `rounded-sm`
  ]

  if (['number', 'timer'].includes(props.type)) {
    styles.push('w-auto')
  }

  switch (props.font) {
    case 'big':
      styles.push('text-5xl')
      break
    case 'medium':
      styles.push('text-3xl')
      break
  }

  return styles
})

const inputProps = computed(() => {
  let attrs = {
    placeholder: props.placeholder
  }

  switch (props.type) {
    case 'number':
      Object.assign(attrs, {
        type: 'number',
        min: '0',
        max: '59'
      })
    case 'timer':
      Object.assign(attrs, {
        type: 'number',
        min: '0',
        max: '59'
      })
  }

  return attrs
})
</script>

<template>
  <input
    :id="`${name}-input`"
    :name="`${name}-input`"
    v-model="value"
    :class="inputStyles"
    @input="(e) => onChange(e, 'hours')"
    v-bind="inputProps" />
</template>
