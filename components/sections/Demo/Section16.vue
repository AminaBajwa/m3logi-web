<template>
    <section class="work-section">
        <div class="anim-icons">
            <span class="icon icon-dotted-map-2 zoom-one"></span>
            <span class="icon icon-plane-1 bounce-y"></span>
        </div>

        <div class="auto-container">
            <div class="sec-title text-center">
                <span class="sub-title">{{ $t('work.subtitle') }}</span>
                <h2>{{ $t('work.title') }}</h2>
                <!-- <p>{{ $t('work.description') }}</p> -->
            </div>

            <div class="row">
                <!-- Work Block 1 -->
                <div class="work-block col-lg-4 col-md-6 col-sm-12 wow fadeInRight">
                    <div class="inner-box">
                        <div class="icon-box">
                            <span class="count">01</span>
                            <i class="icon flaticon-stock-1"></i>
                        </div>
                        <h4 class="title">{{ $t('work.step1Title') }}</h4>
                    </div>
                </div>

                <!-- Work Block 2 -->
                <div class="work-block col-lg-4 col-md-6 col-sm-12 wow fadeInRight" data-wow-delay="300ms">
                    <div class="inner-box">
                        <div class="icon-box">
                            <span class="count">02</span>
                            <i class="icon flaticon-checklist"></i>
                        </div>
                        <h4 class="title">{{ $t('work.step2Title') }}</h4>
                    </div>
                </div>

                <!-- Work Block 3 -->
                <div class="work-block col-lg-4 col-md-6 col-sm-12 wow fadeInRight" data-wow-delay="600ms">
                    <div class="inner-box">
                        <div class="icon-box">
                            <span class="count">03</span>
                            <i class="icon flaticon-location"></i>
                        </div>
                        <h4 class="title">{{ $t('work.step3Title') }}</h4>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
