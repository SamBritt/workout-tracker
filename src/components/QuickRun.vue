<script setup lang="ts">
import Heading from '@/components/Heading.vue'
import Button from '@/components/Button.vue'
import { reactive, ref, watch } from 'vue'
import Label from '@/components/Label.vue'
import Input from '@/components/Input.vue'

interface Time {
  [key: string]: string | number
}

const time: Time = reactive({
  hours: '',
  minutes: '',
  seconds: ''
})

const clear = () => {}

const onChange = (event: Event, type: string) => {
  const numericValue = (event.target as HTMLInputElement).value.replace(/[^0-9]/g, '')
  if (Number(numericValue) < 0) {
    time[type] = 0
  } else if (Number(numericValue) > 59) {
    time[type] = 59
  } else if (Number(numericValue) < 10) {
    time[type] = `0${numericValue}`
  } else if (numericValue.length >= 3) {
    time[type] = numericValue.slice(-2)
    console.log(time[type])
  }
}
</script>

<template>
  <div class="flex flex-col bg-gray-200 w-full h-60 rounded-md shadow-lg px-8 py-4">
    <Heading>Quick Run</Heading>
    <div class="flex flex-col h-full">
      <div class="flex self-center h-1/2 justify-center items-center">
        <div class="flex flex-col text-center">
          <Label class="">hours</Label>
          <!-- <input
            type="number"
            v-model="time.hours"
            class="flex active:scale-105 focus:outline-none text-5xl text-center placeholder:text-slate-400 text-slate-700 w-12 bg-transparent rounded-sm"
            placeholder="00"
            @input="(e) => onChange(e, 'hours')"
            min="0"
            max="59" /> -->
          <Input
            font="big"
            type="timer" />
        </div>

        <span class="text-2xl">:</span>
        <div class="flex flex-col text-center">
          <Label class="">minutes</Label>
          <!-- <input
            type="number"
            v-model="time.minutes"
            class="flex focus:outline-none text-5xl text-center placeholder:text-slate-400 text-slate-700 w-12 bg-transparent rounded-sm"
            placeholder="00"
            @input="(e) => onChange(e, 'minutes')"
            min="0"
            max="59" /> -->
          <Input
            font="big"
            type="timer" />
        </div>

        <span class="text-2xl">:</span>
        <div class="flex flex-col text-center">
          <Label class="">seconds</Label>
          <!-- <input
            type="number"
            v-model="time.seconds"
            class="flex focus:outline-none text-5xl text-center placeholder:text-slate-400 text-slate-700 w-12 bg-transparent rounded-sm"
            placeholder="00"
            @input="(e) => onChange(e, 'seconds')"
            min="0"
            max="59" /> -->
          <Input
            font="big"
            type="timer" />
        </div>
      </div>

      <div class="bg-blue-200 w-full h-1" />

      <div class="flex h-1/2 items-center">
        <div class="flex justify-center items-center w-1/2 p-2 h-full">
          <!-- <input
            class="text-3xl text-center placeholder:text-slate-400 text-slate-100 w-full bg-transparent rounded-sm"
            placeholder="0.0" /> -->
          <Input
            font="medium"
            placeholder="0.0"
            type="number" />

          <Label class="">mi</Label>
        </div>

        <div class="h-14 bg-blue-200 w-1" />

        <div class="flex justify-center items-center w-1/2 p-2 h-full">
          <span class="text-3xl text-gray-400">7:30</span>
          <span class="text-xs text-gray-400">/mi</span>
        </div>
      </div>
    </div>

    <div class="flex gap-8 w-full">
      <Button variant="outline">Clear</Button>
      <Button>Save</Button>
    </div>
  </div>
</template>
