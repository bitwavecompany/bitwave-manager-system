<template>
  <div class="bg-white rounded-2xl shadow p-6 w-full">
    <div class="flex items-center mb-4">
      <span class="iconify text-2xl mr-2" data-icon="mdi:phone-outline"></span>
      <h2 class="text-lg font-semibold">Información de Contacto</h2>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 mb-2">
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
        <input
          type="text"
          class="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          :class="!isEditing ? 'pointer-events-none opacity-60 bg-gray-100' : ''"
          value="+1 (555) 123-4567"
          :readonly="!isEditing"
        />
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Email de Contacto</label>
        <div class="flex items-center gap-2">
          <span class="iconify text-lg text-gray-500" data-icon="mdi:email-outline"></span>
          <input
            type="email"
            class="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            :class="!isEditing ? 'pointer-events-none opacity-60 bg-gray-100' : ''"
            value="contacto@techcorp.com"
            :readonly="!isEditing"
          />
        </div>
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
