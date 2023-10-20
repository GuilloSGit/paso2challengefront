<script setup lang="ts">
import AppAside from '@/components/AppAside.vue'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>

<template>
  <AppHeader />
  <AppAside />
  <AppFooter />

  <main style="grid-area: main"></main>
</template>
