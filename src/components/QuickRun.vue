<script setup lang="ts">
import Heading from '@/components/Heading.vue'
import Button from '@/components/VButton.vue'
import { computed, reactive, ref, watch } from 'vue'
import Label from '@/components/Label.vue'
import Input from '@/components/VInput.vue'

interface Time {
  [key: string]: string | number
}

const emit = defineEmits(['save'])

const time: Time = reactive({
  hours: '',
  minutes: '',
  seconds: '',
  mileage: ''
})

const disabled = computed(() =>
  Boolean(!((time.hours || time.minutes || time.seconds) && time.mileage))
)

// const mileage = ref()
const pace = computed(() => {
  if (!time.mileage) return ''

  const [hours, minutes, seconds, mileage] = [
    Number(time.hours),
    Number(time.minutes),
    Number(time.seconds),
    Number(time.mileage)
  ]

  const totalTimeInSeconds = hours * 3600 + minutes * 60 + seconds

  const pacePerSecond = totalTimeInSeconds / mileage
  const calculatedMinutes = Math.floor(pacePerSecond / 60)
  const calculatedSeconds = Math.round(pacePerSecond % 60)

  return `${calculatedMinutes}:${String(calculatedSeconds).padStart(2, '0')}`
})

const clear = () => {
  time.hours = ''
  time.minutes = ''
  time.seconds = ''
  time.mileage = ''
}
const save = () => {
  emit('save', time)
}
</script>

<template>
  <div class="flex flex-col w-full h-60 rounded-md">
    <div class="flex flex-col h-full">
      <div class="flex self-center h-1/2 justify-center items-center">
        <div class="flex flex-col text-center">
          <Label
            for="quick-hour"
            class="">
            hours
          </Label>

          <Input
            v-model="time.hours"
            name="quick-hour"
            font="big"
            type="timer" />
        </div>

        <span class="text-2xl">:</span>
        <div class="flex flex-col text-center">
          <Label
            for="quick-minutes"
            class="">
            minutes
          </Label>

          <Input
            v-model="time.minutes"
            name="quick-minutes"
            font="big"
            type="timer" />
        </div>

        <span class="text-2xl">:</span>
        <div class="flex flex-col text-center">
          <Label
            for="quick-seconds"
            class="">
            seconds
          </Label>

          <Input
            v-model="time.seconds"
            name="quick-seconds"
            font="big"
            type="timer" />
        </div>
      </div>

      <div class="bg-blue-200 w-full h-1" />

      <div class="flex h-1/2 items-center">
        <div class="flex justify-center items-center w-1/2 p-2 h-full">
          <Input
            v-model="time.mileage"
            name="quick-mileage"
            font="medium"
            placeholder="0.0"
            type="number" />

          <Label
            for="quick-mileage"
            class="">
            mi
          </Label>
        </div>

        <div class="h-14 bg-blue-200 w-1" />

        <div class="flex justify-center items-center w-1/2 p-2 h-full">
          <span
            v-if="pace"
            class="text-3xl text-slate-700">
            {{ pace }}
          </span>
          <span
            v-else
            class="text-3xl text-gray-400">
            0:00
          </span>
          <span class="text-xs text-gray-400">/mi</span>
        </div>
      </div>
    </div>

    <div class="flex gap-8 w-full">
      <Button
        @click="clear"
        variant="outline">
        Clear
      </Button>
      <Button
        @click="save"
        :disabled="disabled">
        Save
      </Button>
    </div>
  </div>
</template>
