<script setup lang="ts">
import Heading from '@/components/Heading.vue'
import Input from '@/components/Input.vue'
import Label from '@/components/Label.vue'
import Button from '@/components/Button.vue'
import TextArea from '@/components/TextArea.vue'
import Dropdown from './Dropdown.vue'
import { reactive } from 'vue'

interface Time {
  [key: string]: string | number
}
const time: Time = reactive({
  hours: '',
  minutes: '',
  seconds: '',
  mileage: ''
})
</script>

<template>
  <div class="flex w-full bg-slate-700 rounded-md px-4 py-2 gap-4">
    <div class="flex flex-col w-full gap-2">
      <Heading>Advanced Run</Heading>

      <div class="flex flex-col w-full h-full justify-start gap-2">
        <div class="flex w-full justify-between">
          <span class="flex gap-1">
            <span class="flex flex-col text-center">
              <Label for="reps">type</Label>
              <!-- <Input
                type="number"
                name="reps" /> -->
              <Dropdown />
            </span>
            <span class="flex flex-col text-center">
              <Label for="reps">reps</Label>
              <Input
                type="number"
                name="reps" />
            </span>

            <span class="flex flex-col text-center">
              <Label for="distance">distance</Label>
              <Input
                type="number"
                name="distance" />
            </span>
          </span>

          <span class="flex">
            <span class="flex flex-col text-center">
              <Label for="rep">HH</Label>
              <Input
                v-model="time.hours"
                type="timer"
                name="time" />
            </span>

            <span class="flex flex-col text-center">
              <Label for="rep">MM</Label>
              <Input
                v-model="time.minutes"
                type="timer"
                name="time" />
            </span>

            <span class="flex flex-col text-center">
              <Label for="rep">SS</Label>
              <Input
                v-model="time.seconds"
                type="timer"
                name="time" />
            </span>
          </span>
        </div>

        <div class="flex flex-col">
          <Dropdown />
        </div>

        <span class="flex flex-col text-left w-full">
          <Label for="notes">Notes</Label>
          <TextArea />
        </span>
      </div>
    </div>

    <div class="self-center h-48 w-2 bg-gray-200" />

    <div class="flex flex-col w-full gap-2">
      <Heading>Repetitions</Heading>

      <div class="flex flex-col h-full gap-2">
        <div class="bg-gray-200 h-6 w-full rounded-md"></div>
        <div class="bg-gray-200 h-6 w-full rounded-md"></div>
      </div>
      <Button>Save</Button>
    </div>
  </div>
</template>
