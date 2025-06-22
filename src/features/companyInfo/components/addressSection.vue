<template>
  <div class="bg-white rounded-2xl shadow p-6 w-full">
    <div class="flex items-center mb-4">
      <span class="iconify text-2xl mr-2" data-icon="mdi:map-marker-outline"></span>
      <h2 class="text-lg font-semibold">Dirección</h2>
    </div>
    <div class="mb-4">
      <label class="block text-sm font-medium text-gray-700 mb-1">Calle</label>
      <input type="text" class="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" :class="!isEditing ? 'pointer-events-none opacity-60 bg-gray-100' : ''" value="Calle Tecnología 123" :readonly="!isEditing" />
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 mb-4">
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Ciudad</label>
        <input type="text" class="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" :class="!isEditing ? 'pointer-events-none opacity-60 bg-gray-100' : ''" value="Madrid" :readonly="!isEditing" />
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Provincia</label>
        <input type="text" class="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" :class="!isEditing ? 'pointer-events-none opacity-60 bg-gray-100' : ''" value="Madrid" :readonly="!isEditing" />
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Código Postal</label>
        <input type="text" class="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" :class="!isEditing ? 'pointer-events-none opacity-60 bg-gray-100' : ''" value="28001" :readonly="!isEditing" />
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">País</label>
        <input type="text" class="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" :class="!isEditing ? 'pointer-events-none opacity-60 bg-gray-100' : ''" value="España" :readonly="!isEditing" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
const props = defineProps<{ isEditing: boolean }>();
</script>

<style scoped>
</style>
