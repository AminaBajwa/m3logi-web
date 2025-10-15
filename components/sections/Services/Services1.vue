<template>
  <section class="services-section">
    <div class="auto-container">
      <div class="row">
        <!-- Service Block 1 -->
        <div class="service-block col-xl-4 col-lg-6 col-md-12 col-sm-12 wow fadeInUp">
          <div class="inner-box">
            <div class="image-box">
              <figure class="image">
                <NuxtLink to="/page-service-details">
                  <img src="/images/resource/service-3.jpg" alt="">
                </NuxtLink>
              </figure>
            </div>
            <div class="content-box">
              <i class="icon flaticon-delivery-truck-3"></i>
              <span class="sub-title">{{ $t('offerings.01Service') }}</span>
              <h4 class="title">
                <NuxtLink to="/page-service-details">{{ $t('offerings.landTransportationTitle') }}</NuxtLink>
              </h4>
              <div class="text">{{ $t('offerings.landTransportationText') }}</div>
            </div>
          </div>
        </div>

        <!-- Service Block 2 -->
        <div class="service-block col-xl-4 col-lg-6 col-md-12 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
          <div class="inner-box">
            <div class="image-box">
              <figure class="image">
                <NuxtLink to="/page-service-details">
                  <img src="/images/resource/service-2.jpg" alt="">
                </NuxtLink>
              </figure>
            </div>
            <div class="content-box">
              <i class="icon flaticon-cargo-boat"></i>
              <span class="sub-title">{{ $t('offerings.02Service') }}</span>
              <h4 class="title">
                <NuxtLink to="/page-service-details">{{ $t('offerings.oceanTransportTitle') }}</NuxtLink>
              </h4>
              <div class="text">{{ $t('offerings.oceanTransportText') }}</div>
            </div>
          </div>
        </div>

        <!-- Service Block 3 -->
        <div class="service-block col-xl-4 col-lg-6 col-md-12 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
          <div class="inner-box">
            <div class="image-box">
              <figure class="image">
                <NuxtLink to="/page-service-details">
                  <img src="/images/resource/service-4.jpg" alt="">
                </NuxtLink>
              </figure>
            </div>
            <div class="content-box">
              <i class="icon flaticon-delivery-box-4"></i>
              <span class="sub-title">{{ $t('offerings.03Service') }}</span>
              <h4 class="title">
                <NuxtLink to="/page-service-details">{{ $t('offerings.customsClearanceTitle') }}</NuxtLink>
              </h4>
              <div class="text">{{ $t('offerings.customsClearanceText') }}</div>
            </div>
          </div>
        </div>

        <!-- Service Block 4 -->
        <div class="service-block col-xl-4 col-lg-6 col-md-12 col-sm-12 wow fadeInUp" data-wow-delay="900ms">
          <div class="inner-box">
            <div class="image-box">
              <figure class="image">
                <NuxtLink to="/page-service-details">
                  <img src="/images/resource/service-4.jpg" alt="">
                </NuxtLink>
              </figure>
            </div>
            <div class="content-box">
              <i class="icon flaticon-delivery-box-4"></i>
              <span class="sub-title">{{ $t('offerings.04Service') }}</span>
              <h4 class="title">
                <NuxtLink to="/page-service-details">{{ $t('offerings.scmConsultingTitle') }}</NuxtLink>
              </h4>
              <div class="text">{{ $t('offerings.scmConsultingText') }}</div>
            </div>
          </div>
        </div>

        <!-- Service Block 5 -->
        <div class="service-block col-xl-4 col-lg-6 col-md-12 col-sm-12 wow fadeInUp" data-wow-delay="1200ms">
          <div class="inner-box">
            <div class="image-box">
              <figure class="image">
                <NuxtLink to="/page-service-details">
                  <img src="/images/resource/service-3.jpg" alt="">
                </NuxtLink>
              </figure>
            </div>
            <div class="content-box">
              <i class="icon flaticon-delivery-truck-3"></i>
              <span class="sub-title">{{ $t('offerings.05Service') }}</span>
              <h4 class="title">
                <NuxtLink to="/page-service-details">{{ $t('offerings.yardServicesTitle') }}</NuxtLink>
              </h4>
              <div class="text">{{ $t('offerings.yardServicesText') }}</div>
            </div>
          </div>
        </div>

        <!-- Service Block 6 -->
        <div class="service-block col-xl-4 col-lg-6 col-md-12 col-sm-12 wow fadeInUp" data-wow-delay="1500ms">
          <div class="inner-box">
            <div class="image-box">
              <figure class="image">
                <NuxtLink to="/page-service-details">
                  <img src="/images/resource/service-1.jpg" alt="">
                </NuxtLink>
              </figure>
            </div>
            <div class="content-box">
              <i class="icon flaticon-airplane-2"></i>
              <span class="sub-title">{{ $t('offerings.06Service') }}</span>
              <h4 class="title">
                <NuxtLink to="/page-service-details">{{ $t('offerings.airFreightTitle') }}</NuxtLink>
              </h4>
              <div class="text">{{ $t('offerings.airFreightText') }}</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
