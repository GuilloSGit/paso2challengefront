<template>
  <aside class="flex flex-col justify-start items-center" :class="[asideStore.isExpanded && 'expanded']"
    @mouseover="asideStore.setIsExpanded(true)" @mouseleave="asideStore.setIsExpanded(false)">
    <AsideItem title="Dashboard" :selected="true" :icon="homeSVG" />

    <img v-if="!asideStore.isExpanded" class="mt-9 mb-2" src='@/assets/icons/dots.svg' alt="Reports" />
    <span v-else class="font-bold text-xs w-full pl-3 mt-8 mb-2 text-gray-400">REPORTS</span>

    <div class="flex flex-col justify-CENTER items-center buttons-container">
      <AsideItem title="Smart Enroller" :isBold="true" :icon="plusBoxSVG" />
      <AsideItem title="Dropout Shield" :isBold="true" :icon="arrowSVG" />
      <AsideItem title="Retention Partner" :icon="restartSVG" />
      <AsideItem title="Risk Detector" :items="['My Reports', 'My Reports', 'My Reports']" :isBold="true"
        :icon="riskSVG" />
      <AsideItem title="Academic Offer" :items="['My Reports', 'My Reports']" :isBold="true" :icon="academicSVG" />
      <AsideItem title="My Reports" :isBold="true" :icon="graphicsSVG" />
      <AsideItem title="Custom Reports" :icon="customGraphicsSVG" />
      <AsideItem title="Workflows" :icon="workflowsSVG" />
    </div>
  </aside>
</template>

<script setup lang="ts">
  import riskSVG from '@/assets/icons/riskDetector.svg'
  import homeSVG from '@/assets/icons/dashboard.svg'
  import arrowSVG from '@/assets/icons/dropoutShield.svg'
  import plusBoxSVG from '@/assets/icons/smartEnroller.svg'
  import restartSVG from '@/assets/icons/retentionPartner.svg'
  import academicSVG from '@/assets/icons/academicOffer.svg'
  import graphicsSVG from '@/assets/icons/myReports.svg'
  import workflowsSVG from '@/assets/icons/workflows.svg'
  import customGraphicsSVG from '@/assets/icons/customReports.svg'
  import AsideItem from '@/components/AsideItem.vue'
  import { asideStore } from '@/store/asideStore'
</script>
<style scoped>
aside {
  grid-area: aside;

  width: 4.063rem;
  /* Same width as body set */

  padding-top: 0.6rem;

  color: var(--aside-text-color);
  background-color: var(--aside-bg-color);

  transition: all 0.1s linear;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.05);
}

aside.expanded {
  z-index: 1000;
  width: 15.625rem;
}

aside.expanded span {
  width: 100%;
}

.buttons-container {
  gap: 0.63rem;
}
</style>
