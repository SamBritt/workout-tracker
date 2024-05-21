<script setup lang="ts" generic="T extends 'timer' | 'text' | 'number'">
import { computed, ref } from 'vue'

interface Props {
  type?: T
  name: string
  placeholder?: string
  font?: string
  modelValue: string | number
}

const { type = 'text', name, placeholder = '00', font, modelValue } = defineProps<Props>()

const emit = defineEmits(['update:modelValue'])

type Value = T extends 'number' ? number : string

const value = computed<Value>({
  get: () => {
    return modelValue as Value
  },
  set(value: Value) {
    emit('update:modelValue', value)
  }
})

const onChange = (event: Event, eType: string) => {
  if (type === 'timer') {
    const numericValue = (event.target as HTMLInputElement).value.replace(/[^0-9]/g, '')
    if (Number(numericValue) < 0) {
      value.value = 0 as Value
    } else if (Number(numericValue) > 59) {
      value.value = 59 as Value
    } else if (Number(numericValue) < 10) {
      value.value = `0${numericValue}` as Value
    } else if (numericValue.length >= 3) {
      value.value = numericValue.slice(-2) as Value
      console.log(value.value)
    }
  }

  // emit('update:modelValue', value.value)
}

const inputStyles = computed(() => {
  const styles = [
    `flex`,
    `active:scale-100`,
    `focus:outline-none`,
    `text-center`,
    `text-gray-300`,
    `focus:placeholder-gray-100`,
    `bg-slate-600/50`,
  ]

  if (['number', 'timer'].includes(type)) {
    styles.push('w-auto')
  }

  switch (font) {
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
    placeholder: placeholder
  }

  switch (type) {
    case 'number':
      Object.assign(attrs, {
        type: 'number',
        min: '0',
        max: '59'
      })
      break
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
