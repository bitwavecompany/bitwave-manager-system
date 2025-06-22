<template>
    <div class="bg-white rounded-2xl shadow p-6 flex flex-col items-center w-full max-w-xs mx-auto">
        <h2 class="text-lg font-semibold mb-4 text-center">Logo de la Empresa</h2>
        <img
            src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&w=200&h=200&fit=crop"
            alt="Logo de la Empresa"
            class="rounded-lg w-32 h-32 object-cover mx-auto"
        />
        <label v-if="isEditing" class="mt-4 block w-full">
            <input
                type="file"
                accept="image/*"
                class="hidden"
            />
            <span class="inline-block cursor-pointer px-4 py-2 bg-blue-50 text-blue-700 font-semibold rounded-lg hover:bg-blue-100 text-sm w-full text-center">Elegir archivo</span>
        </label>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
const props = defineProps<{ isEditing: boolean }>();
</script>

<style scoped>
</style>