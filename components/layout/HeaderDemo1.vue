<!-- components/Header.vue -->
<template>
  <header class="main-header header-style-one" :class="{ 'moblie-search-active': isSearch, 'sticky': scroll }">
    <!-- Header Top -->
    <div class="header-top">
      <div class="top-left">
        <ul class="list-style-one">
          <li v-if="currentTheme.address"><i class="fa fa-map-marker-alt"></i> {{ currentTheme.address }}</li>
          <li v-if="currentTheme.hours"><i class="fa fa-clock"></i> {{ currentTheme.hours }}</li>
          <li v-if="currentTheme.phone">
            <i class="fa fa-phone-volume"></i>
            <NuxtLink :to="`tel:${currentTheme.phone}`">{{ currentTheme.phone }}</NuxtLink>
          </li>
        </ul>
      </div>

      <div class="top-right">
        <!-- Theme Dropdown -->
        <select v-model="selectedTheme" @change="updateTheme" class="theme-selector">
          <option v-for="theme in themes" :key="theme.id" :value="theme.id">{{ theme.name }}</option>
        </select>
        <ul class="social-icon-one">
          <li v-for="social in currentTheme.socialLinks" :key="social.name">
            <NuxtLink :to="social.url"><span :class="`fab fa-${social.icon}`"></span></NuxtLink>
          </li>
        </ul>
      </div>
    </div>
    <!-- Header Top -->

    <!-- Header Lower -->
    <div class="header-lower">
      <div class="main-box">
        <div class="logo-box">
          <div class="logo">
            <NuxtLink to="/">
              <img :src="currentTheme.logoSrc" alt="Logo" title="Logo">
            </NuxtLink>
          </div>
        </div>

        <!--Nav Box-->
        <div class="nav-outer">
          <nav class="nav main-menu">
            <LayoutMenu />
          </nav>
          <div class="outer-box">
            <button class="ui-btn ui-btn search-btn" @click="handleSearch">
              <span class="icon lnr lnr-icon-search"></span>
            </button>
            <NuxtLink to="#" class="ui-btn"><i class="lnr-icon-shopping-cart"></i></NuxtLink>
            <NuxtLink to="#" class="theme-btn btn-style-one alternate"><span class="btn-title">Get A Quote</span></NuxtLink>
            <div class="mobile-nav-toggler" @click="handleToggled"><span class="icon lnr-icon-bars"></span></div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Header Lower -->

    <!-- Mobile Menu -->
    <div class="mobile-menu">
      <div class="menu-backdrop" @click="handleToggled"></div>
      <nav class="menu-box">
        <div class="upper-box">
          <div class="nav-logo">
            <NuxtLink to="/"><img :src="currentTheme.logoSrc" alt="Logo" title="Logo"></NuxtLink>
          </div>
          <div class="close-btn" @click="handleToggled"><i class="icon fa fa-times"></i></div>
        </div>
        <LayoutMobileMenu />
        <ul class="contact-list-one">
          <li v-if="currentTheme.phone">
            <div class="contact-info-box">
              <i class="icon lnr-icon-phone-handset"></i>
              <span class="title">Call Now</span>
              <NuxtLink :to="`tel:${currentTheme.phone}`">{{ currentTheme.phone }}</NuxtLink>
            </div>
          </li>
          <li v-if="currentTheme.email">
            <div class="contact-info-box">
              <span class="icon lnr-icon-envelope1"></span>
              <span class="title">Send Email</span>
              <NuxtLink :to="`mailto:${currentTheme.email}`">{{ currentTheme.email }}</NuxtLink>
            </div>
          </li>
          <li v-if="currentTheme.hours">
            <div class="contact-info-box">
              <span class="icon lnr-icon-clock"></span>
              <span class="title">Timing</span>
              {{ currentTheme.hours }}
            </div>
          </li>
        </ul>
        <ul class="social-links">
          <li v-for="social in currentTheme.socialLinks" :key="social.name">
            <NuxtLink :to="social.url"><i :class="`fab fa-${social.icon}`"></i></NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
    <!-- End Mobile Menu -->

    <!-- Header Search -->
    <div class="search-popup">
      <span class="search-back-drop" @click="handleSearch"></span>
      <button class="close-search" @click="handleSearch"><span class="fa fa-times"></span></button>
      <div class="search-inner">
        <form method="post" action="">
          <div class="form-group">
            <input type="search" name="search-field" value="" placeholder="Search..." required>
            <button type="submit"><i class="fa fa-search"></i></button>
          </div>
        </form>
      </div>
    </div>
    <!-- End Header Search -->

    <!-- Sticky Header -->
    <div class="sticky-header" :class="{ 'fixed-header animated slideInDown': scroll }">
      <div class="auto-container">
        <div class="inner-container">
          <div class="logo">
            <NuxtLink to="/" title=""><img :src="currentTheme.logoSrc" alt="Logo" title=""></NuxtLink>
          </div>
          <div class="nav-outer">
            <nav class="main-menu">
              <div class="navbar-collapse show collapse clearfix">
                <LayoutMenu />
              </div>
            </nav>
            <div class="mobile-nav-toggler" @click="handleToggled"><span class="icon lnr-icon-bars"></span></div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Sticky Header -->
  </header>
</template>

<script setup>
import { ref, computed } from 'vue'

// Define available themes
const themes = ref([
  {
    id: 'theme1',
    name: 'Theme 1 (Default)',
    logoSrc: '/images/logoM3Logi-.png',
    address: 'AKS Hatchobori Bldg 5floor',
    phone: '+81-3-6262-8600',
    email: 'help@company.com',
    hours: 'Mon - Sat: 8am - 5pm',
    socialLinks: [
      { name: 'facebook', icon: 'facebook-square', url: 'https://facebook.com' },
      { name: 'twitter', icon: 'twitter', url: 'https://twitter.com' },
      { name: 'pinterest', icon: 'pinterest-p', url: 'https://pinterest.com' },
      { name: 'instagram', icon: 'instagram', url: 'https://instagram.com' }
    ],
    layoutStyle: 'default'
  },
  {
    id: 'theme2',
    name: 'Theme 2 (Dark)',
    logoSrc: '/images/logo-dark.png',
    address: '123 Dark Avenue, Sydney',
    phone: '+92 (9999) 12345',
    email: 'support@darktheme.com',
    hours: 'Mon - Fri: 9am - 6pm',
    socialLinks: [
      { name: 'linkedin', icon: 'linkedin', url: 'https://linkedin.com' },
      { name: 'youtube', icon: 'youtube', url: 'https://youtube.com' }
    ],
    layoutStyle: 'center-align'
  },
  {
    id: 'theme3',
    name: 'Theme 3 (Minimal)',
    logoSrc: '/images/logo-minimal.png',
    address: '456 Minimal Road, Melbourne',
    phone: '+92 (7777) 54321',
    email: 'info@minimaltheme.com',
    hours: 'Mon - Sun: 10am - 4pm',
    socialLinks: [
      { name: 'twitter', icon: 'twitter', url: 'https://twitter.com' },
      { name: 'instagram', icon: 'instagram', url: 'https://instagram.com' }
    ],
    layoutStyle: 'left-align'
  }
])

// Reactive state for selected theme
const selectedTheme = ref('theme1')

// Computed property to get current theme config
const currentTheme = computed(() => {
  return themes.value.find(theme => theme.id === selectedTheme.value) || themes.value[0]
})

// Emit theme change to parent (for footer or other components)
const emit = defineEmits(['update:theme'])
const updateTheme = () => {
  emit('update:theme', selectedTheme.value)
}

// Props for initial theme (optional, overridden by dropdown)
const props = defineProps({
  initialTheme: {
    type: String,
    default: 'theme1',
    validator: (value) => ['theme1', 'theme2', 'theme3'].includes(value)
  }
})

// Set initial theme from parent
selectedTheme.value = props.initialTheme

// Scroll and interactivity
const scroll = ref(false)
const isToggled = ref(false)
const isSearch = ref(false)

const handleScroll = () => {
  scroll.value = window.scrollY > 100
}

const handleToggled = () => {
  isToggled.value = !isToggled.value
  document.body.classList.toggle('mobile-menu-visible', isToggled.value)
}

const handleSearch = () => {
  isSearch.value = !isSearch.value
}

onMounted(() => {
  document.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  document.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.theme-selector {
  padding: 5px;
  margin-right: 10px;
  border-radius: 5px;
  background: #f5f5f5;
  border: 1px solid #ccc;
}
.main-header.left-align .top-left { text-align: left; }
.main-header.center-align .top-left { text-align: center; }
.main-header.center-align .top-right { justify-content: center; }
</style>