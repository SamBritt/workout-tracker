<script setup lang="ts">
import Heading from '@/components/Heading.vue'
import Input from '@/components/VInput.vue'
import Label from '@/components/Label.vue'
import Button from '@/components/VButton.vue'
import TextArea from '@/components/TextArea.vue'
import Dropdown from './Dropdown.vue'
import { reactive, ref } from 'vue'
import SplitItem from './SplitItem.vue'
import { ScheduleItem, Workout } from '@/types/workout'

interface Time {
  [key: string]: string | number
}

const { workout } = defineProps<{
  workout: ScheduleItem
}>()

const time: Time = reactive({
  hours: '',
  minutes: '',
  seconds: '',
  mileage: ''
})

const reps = ref(0)
const distance = ref(0)
</script>

<template>
  <div class="flex gap-4">
    <div class="flex flex-col w-full gap-2">
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
            <!-- <span class="flex flex-col text-center">
              <Label for="reps">reps</Label>
              <Input
                v-model="reps"
                type="number"
                name="reps" />
            </span>

            <span class="flex flex-col text-center">
              <Label for="distance">distance</Label>
              <Input
                v-model="distance"
                type="number"
                name="distance" />
            </span> -->
          </span>

          <!-- <span class="flex">
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
          </span> -->
        </div>

        <div class="flex">
          <span class="flex flex-col text-center">
            <Label for="reps">reps</Label>
            <Input
              v-model="reps"
              type="number"
              name="reps" />
          </span>

          <span class="flex flex-col text-center">
            <span class="h-1/2"></span>
            <span>x</span>
          </span>

          <span class="flex flex-col text-center">
            <Label for="distance">distance</Label>
            <Input
              v-model="distance"
              type="number"
              name="distance" />
          </span>

          <span class="flex flex-col text-center">
            <span class="h-1/2"></span>
            <span>@</span>
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

        <span class="flex flex-col text-left w-full">
          <Label for="notes">Notes</Label>
          <TextArea />
        </span>
      </div>
    </div>

    <div class="self-center h-48 w-2 bg-gray-200" />

    <div class="flex flex-col w-full gap-2">
      <Heading>Repetitions</Heading>

      <ul class="flex flex-col h-full gap-2">
        <li
          v-for="(split, idx) in workout.data?.details"
          :key="`split-${idx}`"
          class="flex items-center justify-start bg-slate-600 h-6 w-full rounded-md p-2">
          <SplitItem :split="split" element="span" hideRest/>
        </li>
      </ul>
      <Button>Save</Button>
    </div>
  </div>
</template>
