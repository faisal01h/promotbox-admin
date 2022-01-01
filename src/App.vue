<template>
  <div class="main">
    <Sidebar />
    <div class="wrapper">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
  import Sidebar from './components/Sidebar.vue';
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

#app {
  font-family: Avenir, Helvetica, Segoe UI Variable, Segoe UI, Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}

.main {
  @apply flex items-start;
}

.wrapper {
    background-color: #e1ecee;
    height: 100vh;
    @apply w-full;
}
</style>
