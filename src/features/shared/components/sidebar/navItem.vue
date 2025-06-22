<template>
  <button
    class="nav-item flex items-center w-full px-4 py-2 rounded-lg transition-colors duration-150 mb-1"
    :class="active ? 'bg-blue-50 text-blue-700 shadow-sm' : 'hover:bg-gray-100 text-gray-700'"
    type="button"
    @click="$emit('click')"
    tabindex="0"
  >
    <span class="icon flex items-center justify-center mr-3">
      <slot name="icon" />
    </span>
    <span class="label flex-1 text-left text-sm font-medium leading-tight">
      {{ label }}
    </span>
    <span v-if="active" class="ml-auto text-blue-400">
      <svg width="16" height="16" fill="none" viewBox="0 0 16 16"><path d="M6 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </span>
  </button>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

defineProps<{
  label: string
  active?: boolean
}>()

defineEmits(['click'])
</script>

<style scoped>
.nav-item {
  cursor: pointer;
  outline: none;
  border: none;
  background: none;
  font-family: inherit;
}
.icon {
  width: 24px;
  height: 24px;
}
</style>