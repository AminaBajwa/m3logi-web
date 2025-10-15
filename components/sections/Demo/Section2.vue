<template>
  <section class="features-section-two">
    <div class="auto-container">
      <div class="row">
        <!-- Title -->
        <div class="title-column col-lg-6 col-md-12">
          <div class="title-box">
            <h4 class="title">
              {{ $t('features.title_line1') }} <br />
              {{ $t('features.title_line2') }}
            </h4>
          </div>
        </div>

        <!-- Features -->
        <div class="features-column col-lg-6 col-md-12">
          <div class="row">
            <!-- Feature Block 1 -->
            <div class="feature-block-three col-lg-4 col-md-4 col-sm-12">
              <div class="inner">
                <i class="icon flaticon-delivery-courier"></i>
                <h4 class="title">{{ $t('features.item1') }}</h4>
              </div>
            </div>

            <!-- Feature Block 2 -->
            <div class="feature-block-three col-lg-4 col-md-4 col-sm-12">
              <div class="inner">
                <i class="icon flaticon-delivery-insurance-3"></i>
                <h4 class="title">{{ $t('features.item2') }}</h4>
              </div>
            </div>

            <!-- Feature Block 3 -->
            <div class="feature-block-three col-lg-4 col-md-4 col-sm-12">
              <div class="inner">
                <i class="icon flaticon-delivery-box-3"></i>
                <h4 class="title">{{ $t('features.item3') }}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
