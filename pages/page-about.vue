<template>
    <LayoutPageTitle title="About" />
    <SectionsAboutSection3/>
    <SectionsAboutSection11/>
     <SectionsAboutSection5/>
    <!-- <SectionsAboutSection1/> -->
     <OrganizationChart :model="nodes" />
    <SectionsAboutSection2/>
    <SectionsAboutSection12/>
   
</template>

<script setup>
import OrganizationChart from '../components/sections/About/OrganizationChart.vue';

const nodes = [
  {
    id: 1,
    label: 'CEO',
    children: [
      {
        id: 2,
        label: 'CTO',
        children: [
          { id: 3, label: 'Dev Team' },
          { id: 4, label: 'QA Team' }
        ]
      },
      {
        id: 5,
        label: 'CFO'
      }
    ]
  }
];
</script>