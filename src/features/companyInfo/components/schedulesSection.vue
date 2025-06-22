<template>
  <div class="bg-white rounded-xl shadow p-6 w-full max-w-xl mx-auto">
    <div class="flex items-center mb-4">
      <h2 class="text-lg font-semibold text-gray-800">Horarios por Día</h2>
    </div>
    <div>
      <div v-for="(horario, index) in horarios" :key="index" class="flex justify-between items-center py-3 border-b last:border-b-0">
        <span class="text-gray-700 w-32">{{ horario.dia }}</span>
        <template v-if="isEditing">
          <input type="time" v-model="horario.inicio" class="border rounded px-2 py-1 w-24 mr-2" :disabled="!isEditing" />
          <span class="mx-1">-</span>
          <input type="time" v-model="horario.fin" class="border rounded px-2 py-1 w-24" :disabled="!isEditing" />
        </template>
        <template v-else>
          <span class="text-gray-600">{{ horario.inicio }} - {{ horario.fin }}</span>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue';

const props = defineProps<{ isEditing: boolean }>();

const horarios = ref([
  { dia: 'Lunes', inicio: '09:00', fin: '18:00' },
  { dia: 'Martes', inicio: '09:00', fin: '18:00' },
  { dia: 'Miércoles', inicio: '09:00', fin: '18:00' },
  { dia: 'Jueves', inicio: '09:00', fin: '18:00' },
  { dia: 'Viernes', inicio: '09:00', fin: '18:00' },
]);
</script>

<style scoped>
.material-icons {
  font-size: 22px;
}
</style>
