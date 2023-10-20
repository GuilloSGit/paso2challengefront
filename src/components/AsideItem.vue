<template>
  <div @click="expandItems = !expandItems" class="button-container">
    <button
      class="flex justify-center items-center rounded-md item-container"
      :class="[
        (selected || (asideStore.isExpanded && expandItems)) && 'selected',
        asideStore.isExpanded && 'expanded'
      ]"
    >
      <div class="flex justify-between items-center gap-2">
        <img :src="icon" :alt="title" />
        <span
          :class="[
            isBold ? 'font-bold' : 'font-medium',
            asideStore.isExpanded ? 'inline' : 'hidden'
          ]"
          >{{ title }}</span
        >
      </div>
      <button
        v-if="asideStore.isExpanded && items?.length"
        class="flex justify-center items-center"
      >
        <img :src="expandItems ? collapseUpSVG : collapseDownSVG" alt="Expand Items" />
      </button>
    </button>
    <ul v-if="asideStore.isExpanded && expandItems" class="list-disc pl-10">
      <li v-for="(item, idx) in items" :key="idx" class="font-semibold my-5">{{ item }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import collapseDownSVG from '@/assets/icons/collapseArrowDown.svg'
  import collapseUpSVG from '@/assets/icons/collapseArrowUp.svg'
  import { asideStore } from '@/store/asideStore'

  const { title, selected, icon } = defineProps<{
    title: string
    selected?: boolean
    icon: string
    isBold?: boolean
    items?: string[]
  }>()

  const expandItems = ref(false)
  
</script>

<style scoped>
.item-container {
  background-color: var(--white);
  width: 2.814rem;
  height: 2.625rem;

  transition: all 0.1s linear;

  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.05);
}

.item-container.selected {
  color: var(--white);
  background-color: var(--color-primary);
}

.item-container.selected img {
  /* Convert image to white */
  filter: brightness(0) saturate(100%) invert(99%) sepia(9%) saturate(137%) hue-rotate(139deg)
    brightness(116%) contrast(100%);
}

.item-container.expanded {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  gap: 0.75rem;
  justify-content: space-between;
  width: 14.38rem;
}

.button-container:hover .item-container {
  color: var(--white);
  background-color: var(--color-primary);
}
.button-container:hover .item-container img {
  /* Convert image to white */
  filter: brightness(0) saturate(100%) invert(99%) sepia(9%) saturate(137%) hue-rotate(139deg)
    brightness(116%) contrast(100%);
}
</style>
