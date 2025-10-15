<template>
  <section class="about-section-two style-two">
    <div class="anim-icons">
      <!-- <div class="float-image wow fadeInRight"><img src="/images/resource/float-img-4.png" alt=""></div> -->
      <div class="float-text wow zoomInRight">m3Logi</div>
    </div>

    <div class="auto-container" style="margin-top: 52px;">
      <div class="row">

        <!-- Content Column -->
        <div class="content-column col-lg-6 col-md-12 col-sm-12 order-2 wow fadeInRight" data-wow-delay="600ms">
          <div class="inner-column">
            <div class="sec-title">
              <span class="sub-title">{{ $t('aboutservices.subtitle') }}</span>
              <h2>{{ $t('aboutservices.title') }}</h2>
              <h4>{{ $t('aboutservices.tagline') }}</h4>
              <div class="text">
                <p>{{ $t('aboutservices.text1') }}</p>
                <p>{{ $t('aboutservices.text2') }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Image Column -->
        <div class="image-column col-lg-6 col-md-12 col-sm-12">
          <div class="inner-column">
            <figure class="image-1">
              <img src="/images/resource/about-3.jpg" alt="">
            </figure>
            <figure class="image-2">
              <img src="/images/resource/about-4.jpg" alt="">
              <div class="icon-box"><i class="icon flaticon-delivery-box-4"></i></div>
            </figure>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
