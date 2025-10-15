<template>
    <section class="services-section">
        <div class="bg-image" style="background-image: url(./images/background/1.jpg)"></div>
        <div class="anim-icons">
            <span class="icon icon-wave-line"></span>
        </div>

        <div class="auto-container">
            <div class="sec-title text-center">
                <span class="sub-title">{{ $t('services.subtitle') }}</span>
                <h2 v-html="$t('services.maintitle')"></h2>
            </div>

            <div class="row">

                <!-- Service Block 1 -->
                <div class="service-block col-xl-3 col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
                    <div class="inner-box">
                        <div class="image-box">
                            <figure class="image">
                                <NuxtLink to="/page-service-details"><img src="/images/LandTransportation.jpeg" alt=""></NuxtLink>
                            </figure>
                        </div>
                        <div class="content-box">
                            <i class="icon flaticon-delivery-truck-3"></i>
                            <span class="sub-title">01 {{ $t('services.label') }}</span>
                            <h4 class="title"><NuxtLink to="/page-service-details">{{ $t('services.land.title') }}</NuxtLink></h4>
                            <div class="text">{{ $t('services.land.text') }}</div>
                        </div>
                    </div>
                </div>

                <!-- Service Block 2 -->
                <div class="service-block col-xl-3 col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                    <div class="inner-box">
                        <div class="image-box">
                            <figure class="image">
                                <NuxtLink to="/page-service-details"><img src="/images/Air-freight.jpg" alt=""></NuxtLink>
                            </figure>
                        </div>
                        <div class="content-box">
                            <i class="icon flaticon-airplane-2"></i>
                            <span class="sub-title">02 {{ $t('services.label') }}</span>
                            <h4 class="title"><NuxtLink to="/page-service-details">{{ $t('services.air.title') }}</NuxtLink></h4>
                            <div class="text">{{ $t('services.air.text') }}</div>
                        </div>
                    </div>
                </div>

                <!-- Service Block 3 -->
                <div class="service-block col-xl-3 col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="900ms">
                    <div class="inner-box">
                        <div class="image-box">
                            <figure class="image">
                                <NuxtLink to="/page-service-details"><img src="/images/OceanTransportation.jpeg" alt=""></NuxtLink>
                            </figure>
                        </div>
                        <div class="content-box">
                            <i class="icon flaticon-cargo-boat"></i>
                            <span class="sub-title">03 {{ $t('services.label') }}</span>
                            <h4 class="title"><NuxtLink to="/page-service-details">{{ $t('services.ocean.title') }}</NuxtLink></h4>
                            <div class="text">{{ $t('services.ocean.text') }}</div>
                        </div>
                    </div>
                </div>

                <!-- Service Block 4 -->
                <div class="service-block col-xl-3 col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="900ms">
                    <div class="inner-box">
                        <div class="image-box">
                            <figure class="image">
                                <NuxtLink to="/page-service-details"><img src="/images/Custom-Clearance.jpg" alt=""></NuxtLink>
                            </figure>
                        </div>
                        <div class="content-box">
                            <i class="icon fas fa-check"></i>
                            <span class="sub-title">04 {{ $t('services.label') }}</span>
                            <h4 class="title"><NuxtLink to="/page-service-details">{{ $t('services.custom.title') }}</NuxtLink></h4>
                            <div class="text">{{ $t('services.custom.text') }}</div>
                        </div>
                    </div>
                </div>

                <!-- Service Block 5 -->
                <div class="service-block col-xl-3 col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                    <div class="inner-box">
                        <div class="image-box">
                            <figure class="image">
                                <NuxtLink to="/page-service-details"><img src="/images/yardImg.jpeg" alt=""></NuxtLink>
                            </figure>
                        </div>
                        <div class="content-box">
                            <i class="icon flaticon-container-2"></i>
                            <span class="sub-title">05 {{ $t('services.label') }}</span>
                            <h4 class="title"><NuxtLink to="/page-service-details">{{ $t('services.yard.title') }}</NuxtLink></h4>
                            <div class="text">{{ $t('services.yard.text') }}</div>
                        </div>
                    </div>
                </div>

                <!-- Service Block 6 -->
                <div class="service-block col-xl-3 col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="900ms">
                    <div class="inner-box">
                        <div class="image-box">
                            <figure class="image">
                                <NuxtLink to="/page-service-details"><img src="/images/DrayageServices.jpeg" alt=""></NuxtLink>
                            </figure>
                        </div>
                        <div class="content-box">
                            <i class="icon flaticon-truck"></i>
                            <span class="sub-title">06 {{ $t('services.label') }}</span>
                            <h4 class="title"><NuxtLink to="/page-service-details">{{ $t('services.drayage.title') }}</NuxtLink></h4>
                            <div class="text">{{ $t('services.drayage.text') }}</div>
                        </div>
                    </div>
                </div>

                <!-- Service Block 7 -->
                <div class="service-block col-xl-3 col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="900ms">
                    <div class="inner-box">
                        <div class="image-box">
                            <figure class="image">
                                <NuxtLink to="/page-service-details"><img src="/images/VehicleInspection.jpg" alt=""></NuxtLink>
                            </figure>
                        </div>
                        <div class="content-box">
                            <i class="icon flaticon-wrench"></i>
                            <span class="sub-title">07 {{ $t('services.label') }}</span>
                            <h4 class="title"><NuxtLink to="/page-service-details">{{ $t('services.inspection.title') }}</NuxtLink></h4>
                            <div class="text">{{ $t('services.inspection.text') }}</div>
                        </div>
                    </div>
                </div>

                <!-- Service Block 8 -->
                <div class="service-block col-xl-3 col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="900ms">
                    <div class="inner-box">
                        <div class="image-box">
                            <figure class="image">
                                <NuxtLink to="/page-service-details"><img src="/images/VehicleMaintenance.jpg" alt=""></NuxtLink>
                            </figure>
                        </div>
                        <div class="content-box">
                            <i class="icon flaticon-wrench"></i>
                            <span class="sub-title">08 {{ $t('services.label') }}</span>
                            <h4 class="title"><NuxtLink to="/page-service-details">{{ $t('services.maintenance.title') }}</NuxtLink></h4>
                            <div class="text">{{ $t('services.maintenance.text') }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
