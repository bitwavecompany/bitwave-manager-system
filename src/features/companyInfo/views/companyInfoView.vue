<template>
    <div class="p-8">
        <div class="flex items-center justify-between mb-8">
            <div>
                <h1 class="text-3xl font-bold mb-1">Información de la Empresa</h1>
                <p class="text-gray-500">Gestiona los detalles y configuración de tu empresa</p>
            </div>
            <button
                class="flex items-center gap-2 px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                @click="isEditing = !isEditing"
            >
                <Icon
                    v-if="!isEditing"
                    icon="uil:edit"
                    width="24"
                    height="24"
                    style="color: #fff"
                />
                <Icon
                    v-else
                    icon="material-symbols:save"
                    width="24"
                    height="24"
                    style="color: #fff"
                />
                <span v-if="!isEditing">Editar</span>
                <span v-else>Guardar Cambios</span>
            </button>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <logoSection :isEditing="isEditing" />
            <basicInformationSection :isEditing="isEditing" />
        </div>
        <div class="mt-8 max-w-4xl mx-auto">
            <contactInfo :isEditing="isEditing" />
        </div>
        <div class="mt-8 max-w-4xl mx-auto">
            <addressSection :isEditing="isEditing" />
        </div>
        <div class="mt-8 max-w-4xl mx-auto">
            <schedulesSection :isEditing="isEditing" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Icon } from '@iconify/vue';
import logoSection from '../components/logoSection.vue';
import basicInformationSection from '../components/basicInformationSection.vue';
import contactInfo from '../components/contactInfoSection.vue';
import addressSection from '../components/addressSection.vue';
import schedulesSection from '../components/schedulesSection.vue';

const isEditing = ref(false);
</script>

<style scoped>

</style>