<template>
    <section class="banner-section">
        <swiper :slides-per-view="1"
    :space-between="30"
    :loop="true"
    :autoplay="{ delay: 8000, disableOnInteraction: true }"
    :pagination="{ el: '.swiper-pagination', clickable: true }"
    :navigation="{ nextEl: '.h1n', prevEl: '.h1p' }"
    :modules="modules"
    class="banner-carousel owl-carousel owl-theme">
            <!-- Slide Item -->
          <swiper-slide class="slide-item">
  <div class="bg-image" style="background-image: url(images/main-slider/3.jpg);"></div>
  <div class="auto-container">
    <div class="row">
      <!-- Left Content -->
      <div class="content-column col-lg-7 col-md-12 col-sm-12">
        <div class="content-box">
          <h2 class="title animate-3">
            {{ $t('hero.title_line1') }} <br />
            {{ $t('hero.title_line2_part1') }}
            <span class="colored">{{ $t('hero.title_line2_part2') }}</span>
            {{ $t('hero.title_line2_part3') }}
          </h2>
          <p id="subtitle">{{ $t('hero.subtitle') }}</p>
          <div class="btn-box animate-4">
            <NuxtLink
              to="/page-about"
              class="theme-btn btn-style-one alternate"
              download="/2025ENG.pdf"
            >
              <span class="btn-title">{{ $t('hero.button') }}</span>
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Right Image + Text -->
      <div class="image-column col-lg-5 col-md-12 col-sm-12">
        <div class="image-box">
          <div class="fact-counter-one bounce-y">
            <h5>{{ $t('hero.partner_text') }}</h5>
          </div>
          <figure class="image animate-5 animate-x">
            <img src="/images/main-slider/slider1.png" alt="" />
          </figure>
        </div>
      </div>
    </div>
  </div>
</swiper-slide>


 <!-- 🌍 SLIDE 2: Land Transportation -->
<swiper-slide class="slide-item">
  <div class="bg-image" style="background-image: url(images/main-slider/3.jpg);"></div>
  <div class="auto-container">
    <div class="row">
      <div class="content-column col-lg-7 col-md-12 col-sm-12">
        <div class="content-box">
          <h2 class="title animate-3">
            {{ $t('land.title_part1') }}
            <span class="colored">{{ $t('land.title_part2') }}</span>
            {{ $t('land.title_part3') }}
          </h2>
          <p id="subtitle">{{ $t('land.subtitle') }}</p>
          <div class="btn-box animate-4">
            <NuxtLink to="/page-about" class="theme-btn btn-style-one alternate">
              <span class="btn-title">{{ $t('land.button') }}</span>
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="image-column col-lg-5 col-md-12 col-sm-12">
        <div class="image-box">
          <div class="fact-counter-one bounce-y">
            <h5>{{ $t('land.partner_text') }}</h5>
          </div>
          <figure class="image animate-5 animate-x">
            <img src="/images/truck -m3.png" alt="" />
          </figure>
        </div>
      </div>
    </div>
  </div>
</swiper-slide>

<!-- 🌍 SLIDE 3: Container Shipment -->
<swiper-slide class="slide-item">
  <div class="bg-image" style="background-image: url(images/main-slider/3.jpg);"></div>
  <div class="auto-container">
    <div class="row">
      <div class="content-column col-lg-7 col-md-12 col-sm-12">
        <div class="content-box">
          <h2 class="title animate-3">
            {{ $t('container.title_part1') }} <br />
            <span class="colored">{{ $t('container.title_part2') }}</span>
            {{ $t('container.title_part3') }}
          </h2>
          <p id="subtitle">{{ $t('container.subtitle') }}</p>
          <div class="btn-box animate-4">
            <NuxtLink to="/page-about" class="theme-btn btn-style-one alternate">
              <span class="btn-title">{{ $t('container.button') }}</span>
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="image-column col-lg-5 col-md-12 col-sm-12">
        <div class="image-box">
          <div class="fact-counter-one bounce-y">
            <h5>{{ $t('container.partner_text') }}</h5>
          </div>
          <figure class="image animate-5 animate-x">
            <img src="/images/main-slider/slider2.png" alt="" />
          </figure>
        </div>
      </div>
    </div>
  </div>
</swiper-slide>


         <!-- Global Ocean Freight Slide -->
<swiper-slide class="slide-item">
  <div class="bg-image" style="background-image: url(images/main-slider/3.jpg)"></div>
  <div class="auto-container">
    <div class="row">
      <div class="content-column col-lg-7 col-md-12 col-sm-12">
        <div class="content-box">
          <h2 class="title animate-3">
            {{ $t('ocean.title_part1') }}
            <span class="colored">{{ $t('ocean.title_part2') }}</span>
            {{ $t('ocean.title_part3') }}
          </h2>
          <p id="subtitle">{{ $t('ocean.subtitle') }}</p>
          <div class="btn-box animate-4">
            <NuxtLink to="/page-about" class="theme-btn btn-style-one alternate">
              <span class="btn-title">{{ $t('ocean.button') }}</span>
            </NuxtLink>
          </div>
        </div>
      </div>

      <div class="image-column col-lg-5 col-md-12 col-sm-12">
        <div class="image-box">
          <div class="fact-counter-one bounce-y">
            <h5>{{ $t('ocean.partner_text') }}</h5>
          </div>
          <figure class="image animate-5 animate-x">
            <img src="/images/main-slider/slider3.png" alt="Ocean Freight" />
          </figure>
        </div>
      </div>
    </div>
  </div>
</swiper-slide>


<!-- Vehicle Inspection & Maintenance Slide -->
<swiper-slide class="slide-item">
  <div class="bg-image" style="background-image: url(images/main-slider/3.jpg)"></div>
  <div class="auto-container">
    <div class="row">
      <div class="content-column col-lg-7 col-md-12 col-sm-12">
        <div class="content-box">
          <h2 class="title animate-3">
            {{ $t('inspection.title_part1') }}
            <span class="colored">{{ $t('inspection.title_part2') }}</span>
            {{ $t('inspection.title_part3') }}
          </h2>
          <p id="subtitle">{{ $t('inspection.subtitle') }}</p>
          <div class="btn-box animate-4">
            <NuxtLink to="/page-about" class="theme-btn btn-style-one alternate">
              <span class="btn-title">{{ $t('inspection.button') }}</span>
            </NuxtLink>
          </div>
        </div>
      </div>

      <div class="image-column col-lg-5 col-md-12 col-sm-12">
        <div class="image-box">
          <div class="fact-counter-one bounce-y">
            <h5>{{ $t('inspection.partner_text') }}</h5>
          </div>
          <figure class="image animate-5 animate-x">
            <img src="/images/resource/truck.png" alt="Inspection and Maintenance" />
          </figure>
        </div>
      </div>
    </div>
  </div>
</swiper-slide>

        </swiper>

         <div class="swiper-navigation">
    <div class="h1p swiper-button-prev">&#10094;</div>
    <div class="h1n swiper-button-next">&#10095;</div>

    
  </div>

    </section>
</template>
<script>


// ✅ Step 3: Import Swiper Styles (important!)
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// ✅ Step 4: Register modules
const modules = [Autoplay, Pagination, Navigation];


import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/vue"

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Autoplay, Pagination, Navigation],
        }
    },
}
</script>