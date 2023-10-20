<template>
  <div>
    <AppHeader />
    <AppAside />
    <main style="grid-area: main">
      <AppStudentProfile />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
  import AppAside from '@/components/AppAside.vue'
  import AppHeader from '@/components/AppHeader.vue'
  import AppFooter from '@/components/AppFooter.vue'
  import AppStudentProfile from '@/components/AppStudentProfile.vue'
</script>
