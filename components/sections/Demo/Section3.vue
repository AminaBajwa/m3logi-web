<template>
    <section class="about-section pt-60">
        <div class="anim-icons">
            <div class="float-image wow fadeInRight"><img src="/images/resource/float-img-1.png" alt=""></div>
            <span class="icon icon-dots-1 bounce-x"></span>
            <span class="icon icon-dotted-map zoom-one"></span>
        </div>

        <div class="auto-container">
            <div class="row">
                <div class="content-column col-lg-6 col-md-12 col-sm-12 order-2">
                    <div class="inner-column">
                        <div class="sec-title">
                            <span class="sub-title">{{ $t('about.subtitle') }}</span>
                            <h2>{{ $t('about.title') }}</h2>
                            <div class="text">
                                {{ $t('about.text_line1') }}
                                <br><br>
                                {{ $t('about.text_line2') }}
                            </div>
                        </div>

                        <div class="btm-box">
                            <NuxtLink to="/page-about" class="theme-btn btn-style-one">
                                <span class="btn-title">{{ $t('about.button') }}</span>
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <!-- Image Column -->
                <div class="image-column col-lg-6 col-md-12 col-sm-12">
                    <div class="inner-column" id="img">
                        <figure class="image-1"><img src="/images/resource/img1.png" alt=""></figure>
                        <figure class="image-2"><img src="/images/resource/img2.png" alt=""></figure>
                        <div class="experience">
                            <strong><i class="icon flaticon-global"></i> {{ $t('about.experience_years') }}<br> {{ $t('about.experience_text') }}</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
