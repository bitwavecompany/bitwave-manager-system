<template>
  <div class="dashboard-layout">
    <aside class="sidebar">
      <Sidebar />
    </aside>
    <div class="main-content">
      <header class="topbar">
        <Topbar />
      </header>
      <section class="content">
        <slot />
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import Sidebar from '../components/sidebar/sidebar.vue'
import Topbar from '../components/header/topbar.vue'
</script>

<style scoped>
.dashboard-layout {
  display: flex;
  height: 100vh;
  background: #f7fafd;
}
.sidebar {
  width: 250px;
  background: #fff;
  border-right: 1px solid #e5e7eb;
  min-height: 100vh;
}
.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
}
.topbar {
  background: #fff;
  border-bottom: 1px solid #e5e7eb;
  padding: 0;
}
.content {
  flex: 1;
  padding: 32px 32px 0 32px;
  overflow-y: auto;
  background: #f7fafd;
}
</style>