<template>
  <section class="about-section-two" id="vision">
    <div class="auto-container">
      <div class="row">

        <!-- Image Column -->
        <div class="image-column col-lg-6 col-md-12 col-sm-12 order-lg-2">
          <div class="inner-column">
            <figure class="image-1 wow fadeInUp">
              <img src="/images/Vision.png" alt="">
            </figure>
          </div>
        </div>

        <!-- Content Column -->
        <div class="content-column col-lg-6 col-md-12 col-sm-12 order-lg-1">
          <div class="inner-column">
            <div class="sec-title">
              <span class="sub-title">{{ $t('vision.subtitle') }}</span>
              <h2>{{ $t('vision.title') }}</h2>
              <h4>{{ $t('vision.tagline') }}</h4>
              <div class="text">
                <p>{{ $t('vision.paragraph1') }}</p>
                <p>{{ $t('vision.paragraph2') }}</p>
                <p>{{ $t('vision.paragraph3') }}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
