<template>
  <header class="flex justify-between items-center py-5">
    <button>
      <img src="../assets/icons/edmachinaBrand.svg" alt="EdMachina Logo" />
    </button>
    <EdMachinaIcon />
    <div class="flex justify-center items-center items-container">
      <div class="flex justify-center items-center gap-5">
        <button>
          <img src="../assets/icons/world.svg" alt="Language" />
        </button>
        <button>
          <img src="../assets/icons/changeBackgroundMoon.svg" alt="Toggle Theme" />
        </button>
        <button class="relative">
          <img src="../assets/icons/notificationBell.svg" alt="Notifications" />
          <span
            class="absolute w-3 h-3 rounded-full flex justify-center items-center text-xs font-bold notification-badge">4</span>
        </button>
      </div>

      <div v-if="user" class="flex user-info">
        <div class="flex flex-col">
          <span class="font-bold text-sm">{{ user?.name || 'User' }}</span>
          <span class="text-xs font-bold text-right">{{ user?.role || 'Role' }}</span>
        </div>
        <div class="relative">
          <img class="user-avatar" height="39" width="39" :src="user?.avatar" alt="User Avatar" />
          <div class="absolute border rounded-full user-badge"></div>
        </div>
      </div>
      <div v-else>
        <LoaderSpinner />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
  import { ref, watch } from 'vue'
  import type { User } from '@/types'
  import { getUser } from '@/services/getUser'
  import LoaderSpinner from '@/components/LoaderSpinner.vue'

  const user = ref<User | null>(null)

  async function fetchData() {
    const userData = await getUser();
    user.value = userData;
  }

  watch(fetchData, { immediate: true });
  
</script>

<style scoped>
header {
  grid-area: header;

  color: var(--white);
  background-color: var(--header-bg-color);
  padding-left: 1.4rem;
  padding-right: 1.4rem;
}

.items-container {
  gap: 1.15rem;
}

.user-info {
  gap: 0.8rem;
}

.notification-badge {
  top: -0.56rem;
  right: -0.59rem;
  padding: 0.55rem;
  color: var(--white);
  background-color: var(--red);
}

.user-avatar {
  border: solid 0.12rem var(--blue-magenta);
  border-radius: 50%;
}

.user-badge {
  width: 0.68rem;
  height: 0.68rem;

  border-width: 0.11rem;
  border-color: var(--white);
  background-color: var(--green);

  right: 0;
  bottom: 0.5px;
}
</style>
