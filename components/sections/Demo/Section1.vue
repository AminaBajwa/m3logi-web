<template>
    <section class="banner-section">
        <swiper :slides-per-view="1" :space-between="30" :loop="true" :autoplay="{
            delay: 8000,
            disableOnInteraction: true,
        }" :pagination="{
    el: '.swiper-pagination',
    clickable: true,
}" :navigation="{
    nextEl: '.h1n',
    prevEl: '.h1p',
}" :modules="modules" class="banner-carousel owl-carousel owl-theme">
            <!-- Slide Item -->
            <swiper-slide class="slide-item">
                <div class="bg-image" style="background-image: url(images/main-slider/3.jpg);"></div>
                <div class="auto-container">
                    <div class="row">
                        <div class="content-column col-lg-7 col-md-12 col-sm-12">
                            <div class="content-box">
                                <h2 class="title animate-3">A Single <br/>Platform<span class="colored"> for</span> Global Trade</h2>
                                <p id="subtitle">We connect businesses to global markets with trusted logistics, seamless shipping, and end-to-end transportation solutions — all on one platform</p>
                                <div class="btn-box animate-4">
                                    <NuxtLink to="/page-about" class="theme-btn btn-style-one alternate"><span
                                            class="btn-title">Explore
                                            More</span></NuxtLink>
                                </div>
                            </div>
                        </div>
                        <div class="image-column col-lg-5 col-md-12 col-sm-12">
                            <div class="image-box">
                                <div class="fact-counter-one bounce-y">
                                    <h4 class="counter-title">Trusted <br>Partner</h4>
                                    <!-- <div class="count-box">
                                        <ElementsCounterUp :end="4890" />
                                    </div> -->
                                </div>
                                <figure class="image animate-5 animate-x"><img src="/images/main-slider/slider1.png" alt="">
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </swiper-slide>

            <!-- Slide Item -->
            <swiper-slide class="slide-item">
                <div class="bg-image" style="background-image: url(images/main-slider/3.jpg);"></div>
                <div class="auto-container">
                    <div class="row">
                        <div class="content-column col-lg-7 col-md-12 col-sm-12">
                            <div class="content-box">
                                <h2 class="title animate-3">Fast & Reliable Global <span class="colored">Land </span>Transportation </h2>
                                <p id="subtitle">From auction to yard, yard to port, or auction to auction — we ensure smooth vehicle movement through our trusted fleet network.</p>
                                <div class="btn-box animate-4">
                                    <NuxtLink to="/page-about" class="theme-btn btn-style-one alternate"><span
                                            class="btn-title">Explore
                                            More</span></NuxtLink>
                                </div>
                            </div>
                        </div>
                        <div class="image-column col-lg-5 col-md-12 col-sm-12">
                            <div class="image-box">
                                <div class="fact-counter-one bounce-y">
                                    <h4 class="counter-title">Serving <br>Clients</h4>
                                    <!-- <div class="count-box">
                                        <ElementsCounterUp :end="4890" />
                                    </div> -->
                                </div>
                                <figure class="image animate-5 animate-x"><img src="/images/truck -m3.png" alt="">
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </swiper-slide>


            <!-- Slide Item -->
            <swiper-slide class="slide-item">
                <div class="bg-image" style="background-image: url(images/main-slider/3.jpg);"></div>
                <div class="auto-container">
                    <div class="row">
                        <div class="content-column col-lg-7 col-md-12 col-sm-12">
                            <div class="content-box">
                                <h2 class="title animate-3">Trusted and <br/> Safe <span class="colored">Container</span> Shipment</h2>
                                <p id="subtitle">We provide efficient container vanning and drayage services with trained professionals to ensure your shipment arrives safely and on time.</p>
                                <div class="btn-box animate-4">
                                    <NuxtLink to="/page-about" class="theme-btn btn-style-one alternate"><span
                                            class="btn-title">Explore
                                            More</span></NuxtLink>
                                </div>
                            </div>
                        </div>
                        <div class="image-column col-lg-5 col-md-12 col-sm-12">
                            <div class="image-box">
                                <div class="fact-counter-one bounce-y">
                                    <h4 class="counter-title">Delivering <br> Worldwide</h4>
                                    <!-- <div class="count-box">
                                        <ElementsCounterUp :end="4890" />
                                    </div> -->
                                </div>
                                <figure class="image animate-5 animate-x"><img src="/images/main-slider/slider2.png" alt="">
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </swiper-slide>


            <!-- Slide Item -->
            <swiper-slide class="slide-item">
                <div class="bg-image" style="background-image: url(images/main-slider/3.jpg);"></div>
                <div class="auto-container">
                    <div class="row">
                        <div class="content-column col-lg-7 col-md-12 col-sm-12">
                            <div class="content-box">
                                <h2 class="title animate-3">Global Ocean <span class="colored">Freight</span> Solutions
                                </h2>
                                <p id="subtitle">Partnering with major shipping lines, we offer RORO and container shipping to key global ports — connecting your business worldwide.</p>
                                <div class="btn-box animate-4">
                                    <NuxtLink to="/page-about" class="theme-btn btn-style-one alternate"><span
                                            class="btn-title">Explore
                                            More</span></NuxtLink>
                                </div>
                            </div>
                        </div>
                        <div class="image-column col-lg-5 col-md-12 col-sm-12">
                            <div class="image-box">
                                <div class="fact-counter-one bounce-y">
                                    <h4 class="counter-title">Driven <br>Forward</h4>
                                    <!-- <div class="count-box">
                                        <ElementsCounterUp :end="4890" />
                                    </div> -->
                                </div>
                                <figure class="image animate-5 animate-x"><img src="/images/main-slider/slider3.png" alt="">
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </swiper-slide>


              <!-- Slide Item -->
            <swiper-slide class="slide-item">
                <div class="bg-image" style="background-image: url(images/main-slider/3.jpg);"></div>
                <div class="auto-container">
                    <div class="row">
                        <div class="content-column col-lg-7 col-md-12 col-sm-12">
                            <div class="content-box">
                                <h2 class="title animate-3">Vehicle Inspection  <span class="colored"> &</span> Maintenance
                                </h2>
                                <p id="subtitle">We provide professional vehicle inspection, maintenance, and pre-export inspection services to meet international standards and regulations.</p>
                                <div class="btn-box animate-4">
                                    <NuxtLink to="/page-about" class="theme-btn btn-style-one alternate"><span
                                            class="btn-title">Explore
                                            More</span></NuxtLink>
                                </div>
                            </div>
                        </div>
                        <div class="image-column col-lg-5 col-md-12 col-sm-12">
                            <div class="image-box">
                                <div class="fact-counter-one bounce-y">
                                    <h4 class="counter-title">Global <br> Network</h4>
                                    <!-- <div class="count-box">
                                        <ElementsCounterUp :end="4890" />
                                    </div> -->
                                </div>
                                <figure class="image animate-5 animate-x"><img src="/images/resource/truck.png" alt="">
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </swiper-slide>

        </swiper>

    </section>
</template>
<script>
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/vue"

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Autoplay, Pagination, Navigation],
        }
    },
}
</script>