<template>
    <div class="bg-white rounded-2xl shadow p-6 w-full">
        <div class="flex items-center mb-4">
            <span class="iconify text-2xl mr-2" data-icon="mdi:clipboard-text-outline"></span>
            <h2 class="text-lg font-semibold">Información Básica</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 mb-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Nombre de la Empresa</label>
                <input
                    type="text"
                    class="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    :class="!isEditing ? 'pointer-events-none opacity-60 bg-gray-100' : ''"
                    value="TechCorp Solutions"
                    :readonly="!isEditing"
                />
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Dominio</label>
                <div class="flex items-center gap-2">
                    <span class="iconify text-lg text-gray-500" data-icon="mdi:web"></span>
                    <input
                        type="text"
                        class="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        :class="!isEditing ? 'pointer-events-none opacity-60 bg-gray-100' : ''"
                        value="techcorp.com"
                        :readonly="!isEditing"
                    />
                </div>
            </div>
        </div>
        <div class="mt-4">
            <label class="block text-sm font-medium text-gray-700 mb-1">Horarios de Atención</label>
            <div class="flex items-center gap-2">
                <span class="iconify text-lg text-gray-500" data-icon="mdi:clock-outline"></span>
                <input
                    type="text"
                    class="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    :class="!isEditing ? 'pointer-events-none opacity-60 bg-gray-100' : ''"
                    value="9:00 AM - 6:00 PM"
                    :readonly="!isEditing"
                />
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