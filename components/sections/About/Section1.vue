<template>
  <section class="offer-section" id="offerr-sec">
    <div class="auto-container">
      <div class="row">
        <!-- Content Column -->
        <div class="content-column col-lg-7 col-md-12">
          <div class="inner-column">
            <div>
              <h2>{{ $t('companyProfile.title') }}</h2>
              <h4>{{ $t('companyProfile.subtitle') }}</h4>
              <div class="text">
                {{ $t('companyProfile.description') }}
              </div>
            </div>

            <NuxtLink to="/page-services" class="theme-btn btn-style-two hvr-light">
              <span class="btn-title">{{ $t('companyProfile.exploreMore') }}</span>
            </NuxtLink>
          </div>
        </div>

        <!-- Image Column -->
        <div class="image-column col-lg-4 col-md-8 col-sm-8">
          <div class="inner-column">
            <div class="image-box">
              <figure class="image"><img src="/images/m3logiOffice.jpeg" alt="" /></figure>
              <figure class="image"><img src="/images/gallery-14.jpeg" alt="" /></figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
