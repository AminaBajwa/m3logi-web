<template>
  <section class="project-section">
    <div class="large-container">
      <div class="sec-title text-center">
        <span class="sub-title">LATEST PROJECTS</span>
        <h2>Works across the world</h2>
      </div>

      <!-- Project Carousel -->
      <swiper
        :slides-per-view="4"
        :space-between="30"
        :loop="true"
        :autoplay="{ delay: 8000, disableOnInteraction: true }"
        :breakpoints="{
          320:  { slidesPerView: 1, spaceBetween: 30 },
          575:  { slidesPerView: 2, spaceBetween: 30 },
          767:  { slidesPerView: 2, spaceBetween: 30 },
          991:  { slidesPerView: 3, spaceBetween: 30 },
          1199: { slidesPerView: 3, spaceBetween: 30 },
          1350: { slidesPerView: 3, spaceBetween: 30 }
        }"
        :pagination="{ el: '.swiper-pagination', clickable: true }"
        :navigation="{ nextEl: '.h1n', prevEl: '.h1p' }"
        :modules="modules"
        class="project-carousel owl-carousel owl-theme"
      >
        <!-- Durban -->
        <swiper-slide class="project-block">
          <div class="inner-box">
            <div class="image-box">
              <figure class="image">
                <NuxtLink to="/images/resource/project-1.jpg" class="lightbox-image">
                  <img src="/images/resource/project-1.jpg" alt="Durban, South Africa - M3LOGI 1 (PTY) LTD" />
                </NuxtLink>
              </figure>

              <!-- Map icon (opens Google Maps) -->
              <a
                :href="mapUrl('M3LOGI 1 (PTY) LTD, Office No 403, 4Th floor Corporate place, 9 Dorothly Nyembe Street, Durban, 4001 South Africa.')"
                target="_blank"
                rel="noopener"
                class="icon"
                aria-label="Open Durban on Google Maps"
                title="Open in Google Maps"
              >
                <i class="fa fa-map-marker"></i>
              </a>
            </div>

            <div class="content-box location-content">
              <span class="sub-title">International Location</span>
              <h4 class="title">
                <NuxtLink to="/page-project-details">Durban, South Africa</NuxtLink>
              </h4>
              <p class="company">M3LOGI 1 (PTY) LTD</p>
              <p class="address">
                Office No 403, 4Th floor Corporate place, 9 Dorothly Nyembe Street, Durban, 4001 South Africa.
              </p>
            </div>
          </div>
        </swiper-slide>

        <!-- Karachi -->
        <swiper-slide class="project-block">
          <div class="inner-box">
            <div class="image-box">
              <figure class="image">
                <NuxtLink to="/images/resource/project-2.jpg" class="lightbox-image">
                  <img src="/images/resource/project-2.jpg" alt="Karachi, Pakistan - Overseas Transit Agency (Pvt) Ltd. (AGENT)" />
                </NuxtLink>
              </figure>

              <!-- Map icon -->
              <a
                :href="mapUrl('Overseas Transit Agency (Pvt) Ltd. (AGENT), 1201-1203, 12th Floor, Q.M. House, Karachi, Pakistan.')"
                target="_blank"
                rel="noopener"
                class="icon"
                aria-label="Open Karachi on Google Maps"
                title="Open in Google Maps"
              >
                <i class="fa fa-map-marker"></i>
              </a>
            </div>

            <div class="content-box location-content">
              <span class="sub-title">International Location</span>
              <h4 class="title">
                <NuxtLink to="/page-project-details">Karachi, Pakistan</NuxtLink>
              </h4>
              <p class="company">Overseas Transit Agency (Pvt) Ltd. (AGENT)</p>
              <p class="address">
                1201-1203, 12th Floor, Q.M. House, Karachi, Pakistan.
              </p>
            </div>
          </div>
        </swiper-slide>

        <!-- Southampton -->
        <swiper-slide class="project-block">
          <div class="inner-box">
            <div class="image-box">
              <figure class="image">
                <NuxtLink to="/images/resource/project-3.jpg" class="lightbox-image">
                  <img src="/images/resource/project-3.jpg" alt="Southampton, United Kingdom - C2sky Cargo LTD (AGENT)" />
                </NuxtLink>
              </figure>

              <!-- Map icon -->
              <a
                :href="mapUrl('C2sky Cargo LTD (AGENT), 22 Wyresdale Road Greater Manchester Bolton BL1 4DN UK')"
                target="_blank"
                rel="noopener"
                class="icon"
                aria-label="Open Southampton on Google Maps"
                title="Open in Google Maps"
              >
                <i class="fa fa-map-marker"></i>
              </a>
            </div>

            <div class="content-box location-content">
              <span class="sub-title">International Location</span>
              <h4 class="title">
                <NuxtLink to="/page-project-details">Southampton, United Kingdom</NuxtLink>
              </h4>
              <p class="company">C2sky Cargo LTD (AGENT)</p>
              <p class="address">
                22 Wyresdale Road Greater Manchester Bolton BL1 4DN UK
              </p>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script>
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/vue"

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const mapUrl = (query) =>
      `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`

    return {
      modules: [Autoplay, Pagination, Navigation],
      mapUrl,
    }
  },
}
</script>

<style scoped>
/* Make new content lines visible and nicely spaced */
.location-content .company,
.location-content .address {
  display: block;
  margin-top: 6px;
  font-size: 14px;
  line-height: 1.55;
  color: #444; /* high contrast, visible on light theme */
}

/* Ensure title wraps (not truncated) */
.location-content .title a {
  white-space: normal;
  word-break: break-word;
}

/* If any theme sets overflow hidden, override here to show all text */
.project-block .content-box {
  overflow: visible;
}

/* Keep icon same position but change to map marker (no extra styling needed) */
.image-box .icon i.fa {
  font-size: 16px;
}
</style>