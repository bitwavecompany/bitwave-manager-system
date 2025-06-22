<template>
  <DashboardLayout>
    <div>
      <component :is="currentComponent" />
    </div>
  </DashboardLayout>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import DashboardLayout from '../../shared/layout/dashboardLayout.vue'
import { useSidebarState } from '../../shared/components/sidebar/sidebarState'
import companyInfoView from '../../companyInfo/views/companyInfoView.vue'
import modulesView from '../../modules/views/ModulesView.vue'
import imagesModuleView from '../../imagesModule/views/imagesModuleView.vue'
import cardsView from '@/features/cards/views/cardsView.vue'
import contentView from '@/features/content/view/contentView.vue'
import userProfileView from '@/features/userProfile/view/userProfileView.vue'

const { activeIndex } = useSidebarState()

const currentComponent = computed(() => {
  switch (activeIndex.value) {
    case 0:
      return companyInfoView
    case 1:
      return modulesView
    case 2:
      return imagesModuleView
    case 3:
      return cardsView
    case 4:
      return contentView
    case 5:
      return userProfileView
    default:
      return {
        template: '<div>hola</div>'
      }
  }
})
</script>

<style scoped>
/* Puedes agregar estilos específicos para el contenido aquí */
</style>