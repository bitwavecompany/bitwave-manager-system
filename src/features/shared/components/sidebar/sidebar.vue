<template>
  <div class="sidebar-menu flex flex-col h-full px-4 pt-6 pb-4">
    <!-- Logo y título -->
    <div class="flex items-center mb-8">
      <span class="mr-3">
        <!-- Icono principal -->
        <Icon icon="mdi:folder-information-outline" width="32" height="32" color="#2563eb" />
      </span>
      <div>
        <div class="font-semibold text-lg text-blue-900 leading-tight">GestorInfo</div>
        <div class="text-xs text-gray-400">Sistema de Gestión</div>
      </div>
    </div>
    <!-- Menú -->
    <nav class="flex-1">
      <NavItem label="Información Empresa" :active="activeIndex === 0" @click="setActiveIndex(0)">
        <template #icon>
          <Icon icon="mdi:office-building-outline" width="20" height="20" :color="activeIndex === 0 ? '#2563eb' : '#6b7280'" />
        </template>
      </NavItem>
      <NavItem label="Módulos" :active="activeIndex === 1" @click="setActiveIndex(1)">
        <template #icon>
          <Icon icon="mdi:view-grid-outline" width="20" height="20" :color="activeIndex === 1 ? '#2563eb' : '#6b7280'" />
        </template>
      </NavItem>
      <NavItem label="Imágenes" :active="activeIndex === 2" @click="setActiveIndex(2)">
        <template #icon>
          <Icon icon="mdi:image-outline" width="20" height="20" :color="activeIndex === 2 ? '#2563eb' : '#6b7280'" />
        </template>
      </NavItem>
      <NavItem label="Tarjetas" :active="activeIndex === 3" @click="setActiveIndex(3)">
        <template #icon>
          <Icon icon="mdi:credit-card-outline" width="20" height="20" :color="activeIndex === 3 ? '#2563eb' : '#6b7280'" />
        </template>
      </NavItem>
      <NavItem label="Contenido" :active="activeIndex === 4" @click="setActiveIndex(4)">
        <template #icon>
          <Icon icon="mdi:file-document-outline" width="20" height="20" :color="activeIndex === 4 ? '#2563eb' : '#6b7280'" />
        </template>
      </NavItem>
      <NavItem label="Perfil Usuario" :active="activeIndex === 5" @click="setActiveIndex(5)">
        <template #icon>
          <Icon icon="mdi:account-outline" width="20" height="20" :color="activeIndex === 5 ? '#2563eb' : '#6b7280'" />
        </template>
      </NavItem>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { useSidebarState } from './sidebarState'
import NavItem from './navItem.vue'
import { Icon } from '@iconify/vue'

const { activeIndex, setActiveIndex } = useSidebarState()
</script>

<style scoped>
.sidebar-menu {
  min-width: 220px;
  background: #fff;
  border-right: 1px solid #e5e7eb;
}
.nav-item {
  cursor: pointer;
  outline: none;
  border: none;
  background: none;
  font-family: inherit;
}
.nav-item.bg-blue-50 {
  background: #e0edff !important; /* azul claro personalizado */
  color: #2563eb !important;
}
</style>