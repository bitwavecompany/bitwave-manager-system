import { ref, readonly } from 'vue'

const activeIndex = ref(0)

export const useSidebarState = () => {
  return {
    activeIndex: readonly(activeIndex),
    setActiveIndex: (idx: number) => { activeIndex.value = idx }
  }
}
