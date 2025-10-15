<template>
    <section class="about-section-two">
        <div class="auto-container">
            <div class="row">
                <div class="content-column col-lg-6 col-md-12 col-sm-12 order-2">
                    <div class="inner-column">
                        <div class="sec-title">
                            <span class="sub-title">{{ $t('ceo.subtitle') }}</span>
                            <h2>{{ $t('ceo.subtitle') }}</h2>
                            <h4>{{ $t('ceo.subtitle2') }}</h4>
                            <h3>{{ $t('ceo.ceoMessageTitle') }}</h3>

                            <blockquote class="ceo-quote">
                           {{ $t('ceo.ceoQuote') }}
                            </blockquote>
                            <cite class="ceo-cite">— {{ $t('ceo.ceoNameAndTitle') }}</cite>
                       
                        </div>

                        <div class="founder-info">
                            <div class="thumb"><img src="/images/CEO.png" alt=""></div>
                            <h5 class="name">{{ $t('ceo.ceoName') }}</h5>
                            <span class="designation">{{ $t('ceo.ceoDesignation') }}</span>
                        </div>
                    </div>
                </div>

                <!-- Image Column -->
                <div class="image-column col-lg-6 col-md-12 col-sm-12">
                    <div class="inner-column">
                        <figure class="image-1 wow fadeInUp"><img src="/images/m3logiOffice.jpeg" alt=""></figure>
                        <figure class="image-2 wow fadeInRight">
                            <!-- <img src="/images/resource/ceo-4.jpg" alt=""> -->
                              <img src="/images/gallery-3.jpg" alt="">
                            <!-- <div class="icon-box"><i class="icon flaticon-delivery-box-4"></i></div> -->
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>