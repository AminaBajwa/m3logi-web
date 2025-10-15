<template>
  <section class="about-section-two" id="mission">
    <div class="auto-container">
      <div class="row">
        <div class="content-column col-lg-6 col-md-12 col-sm-12 order-2">
          <div class="inner-column">
            <div class="sec-title">
              <span class="sub-title">{{ $t('mission.subtitle') }}</span>
              <h2>{{ $t('mission.title') }}</h2>
              <h4>{{ $t('mission.tagline') }}</h4>
             <div class="text">
                <p>{{ $t('mission.paragraph1') }}</p>
                <p>{{ $t('mission.paragraph2') }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Image Column -->
        <div class="image-column col-lg-6 col-md-12 col-sm-12">
          <div class="inner-column">
            <figure class="image-1 wow fadeInUp">
              <img src="/images/Mission.png" alt="">
            </figure>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
