<!-- <template>
    <ul class="navigation">
        <li class="current dropdown">
            <NuxtLink to="/">Home</NuxtLink>
            <ul>
                <li>
                    <NuxtLink to="/">Home page 01</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/index-2">Home page 02</NuxtLink>
                </li>
            </ul>
        </li>
        <li>
            <NuxtLink to="/page-about">About</NuxtLink>
        </li>
        <li class="dropdown">
            <NuxtLink to="#">Services</NuxtLink>
            <ul>
                <li>
                    <NuxtLink to="/page-services">Services List</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/page-service-details">Service Details</NuxtLink>
                </li>
            </ul>
        </li>
        <li class="dropdown">
            <NuxtLink to="#">Projects</NuxtLink>
            <ul>
                <li>
                    <NuxtLink to="/page-projects">Projects List</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/page-project-details">Project Details</NuxtLink>
                </li>
            </ul>
        </li>
        <li class="dropdown">
            <NuxtLink to="#">Team</NuxtLink>
            <ul>
                <li>
                    <NuxtLink to="/page-team">Team List</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/page-team-details">Team Details</NuxtLink>
                </li>
            </ul>
        </li>
        <li class="dropdown">
            <NuxtLink to="#">News</NuxtLink>
            <ul>
                <li>
                    <NuxtLink to="/news-grid">News Grid</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/news-details">News Details</NuxtLink>
                </li>
            </ul>
        </li>
        <li>
            <NuxtLink to="/page-contact">Contact</NuxtLink>
        </li>
    </ul>
</template> -->
<template>
  <ul class="navigation">
    <li>
      <NuxtLink to="/">{{ $t('nav.home') }}</NuxtLink>
    </li>

    <li class="dropdown">
      <NuxtLink to="/page-about">{{ $t('nav.about') }}</NuxtLink>
      <ul>
        <li>
          <NuxtLink to="/page-gallery">{{ $t('nav.gallery') }}</NuxtLink>
        </li>
      </ul>
    </li>

    <li class="dropdown">
      <NuxtLink to="#">{{ $t('nav.services') }}</NuxtLink>
      <ul>
        <li>
          <NuxtLink to="/page-services">{{ $t('nav.servicesList') }}</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/page-service-details">{{ $t('nav.serviceDetails') }}</NuxtLink>
        </li>
      </ul>
    </li>

    <li class="dropdown">
      <NuxtLink to="#">{{ $t('nav.locations') }}</NuxtLink>
      <ul>
        <li>
          <NuxtLink to="/news-grid">{{ $t('nav.internationalLocation') }}</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/news-details">{{ $t('nav.newsDetails') }}</NuxtLink>
        </li>
      </ul>
    </li>

    <li>
      <NuxtLink to="/page-contact">{{ $t('nav.contact') }}</NuxtLink>
    </li>
  </ul>
</template>

<script setup>
// no additional script needed
</script>