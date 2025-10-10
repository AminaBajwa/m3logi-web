<!-- app.vue -->
<template>
  <div>
    <!-- Splash Overlay -->
    <div v-show="showSplash" class="splash">
      <img src="/logoM3Logi-.png" alt="Logo" />
    </div>

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
const showSplash = ref(true)
const nuxtApp = useNuxtApp()

if (process.client) {
  nuxtApp.hook('page:finish', () => {
    showSplash.value = false
  })
}
</script>

<style>
.splash {
  position: fixed;
  inset: 0;
  background: #0ea5e9;       /* apna brand color */
  display: grid;
  place-items: center;
  z-index: 9999;
  transition: opacity .25s ease;
}
.splash[style*="display: none"] { opacity: 0; }
.splash img { width: 120px; height: auto; }
</style>