<template>
    <footer class="main-footer">
        <div class="bg-image" style="background-image: url(./images/background/5.jpg)"></div>
        <div class="anim-icons">
            <span class="icon icon-plane-3 bounce-x"></span>
        </div>

        <!-- Contact info -->
        <div class="contacts-outer">
            <div class="auto-container">
                <div class="row">
                    <!-- Contact Info Block -->
                    <div class="contact-info-block col-lg-4 col-md-6 col-sm-12 wow fadeInRight">
                        <div class="inner-box">
                            <div class="icon-box"><i class="icon flaticon-international-shipping-2"></i></div>
                            <h4 class="title">Address</h4>
                            <div class="text">Aks Hatchobori Bldg 5 Floor, 2 Chome 27-6,
Hatchobori, Chuo-ku, Tokyo-to Japan</div>
                        </div>
                    </div>

                    <!-- Contact Info Block -->
                    <div class="contact-info-block col-lg-4 col-md-6 col-sm-12 wow fadeInRight" data-wow-delay="300ms">
                        <div class="inner-box">
                            <div class="icon-box"><i class="icon flaticon-stock-1"></i></div>
                            <h4 class="title">Contact</h4>
                            <div class="text">
                                <NuxtLink to="mailto:sales@m3logi.com ">sales@m3logi.com </NuxtLink>
                                <NuxtLink to="tel:+92(8800)48720">+81-3-6262-8600</NuxtLink>
                            </div>
                        </div>
                    </div>

                    <!-- Contact Info Block -->
                    <div class="contact-info-block col-lg-4 col-md-6 col-sm-12 wow fadeInRight" data-wow-delay="600ms">
                        <div class="inner-box">
                            <div class="icon-box"><i class="icon flaticon-24-hours-2"></i></div>
                            <h4 class="title">Timing</h4>
                            <div class="text">Mon - Sat: 8 am - 5 pm, Sunday: CLOSED</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Contact info -->

        <!--Widgets Section-->
        <div class="widgets-section">
            <div class="auto-container">
                <div class="row">
                    <!--Footer Column-->
                    <div class="footer-column col-xl-3 col-lg-12 col-md-6 col-sm-12">
                        <div class="footer-widget about-widget">
                            <div class="logo">
                                <NuxtLink to="/"><img src="/images/logoM3Logi-.png" alt=""></NuxtLink>
                            </div>
                            <div class="text">m3logi brings the world closer together we provide you with the best possible service tailored to your needs.</div>
                            <NuxtLink to="/page-about" class="theme-btn btn-style-one hvr-light small"><span
                                    class="btn-title">About</span></NuxtLink>
                        </div>
                    </div>

                    <!--Footer Column-->
                    <div class="footer-column col-xl-3 col-lg-3 col-md-6 col-sm-12">
                        <div class="footer-widget">
                            <h3 class="widget-title">Service</h3>
                            <ul class="user-links">
                                <li>
                                    <NuxtLink to="#">Reliability & Punctuality</NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="#">Trusted Franchise</NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="#">Warehoues Storage</NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="#">Real Time Tracking</NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="#">Transparent Pricing</NuxtLink>
                                </li>
                            </ul>
                        </div>
                    </div>


                    <!--Footer Column-->
                    <div class="footer-column col-xl-3 col-lg-4 col-md-6 col-sm-12">
                        <div class="footer-widget gallery-widget">
                            <h3 class="widget-title">Projects</h3>
                            <div class="widget-content">
                                <div class="outer clearfix">
                                    <figure class="image">
                                        <NuxtLink to="#"><img src="/images/resource/project-thumb-1.jpg" alt="">
                                        </NuxtLink>
                                    </figure>

                                    <figure class="image">
                                        <NuxtLink to="#"><img src="/images/resource/project-thumb-2.jpg" alt="">
                                        </NuxtLink>
                                    </figure>

                                    <figure class="image">
                                        <NuxtLink to="#"><img src="/images/resource/project-thumb-3.jpg" alt="">
                                        </NuxtLink>
                                    </figure>

                                    <figure class="image">
                                        <NuxtLink to="#"><img src="/images/resource/project-thumb-4.jpg" alt="">
                                        </NuxtLink>
                                    </figure>

                                    <figure class="image">
                                        <NuxtLink to="#"><img src="/images/resource/project-thumb-5.jpg" alt="">
                                        </NuxtLink>
                                    </figure>

                                    <figure class="image">
                                        <NuxtLink to="#"><img src="/images/resource/project-thumb-6.jpg" alt="">
                                        </NuxtLink>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!--Footer Column-->
                    <div class="footer-column col-xl-3 col-lg-5 col-md-6 col-sm-12">
                        <div class="footer-widget">
                            <h3 class="widget-title">Newsletter</h3>
                            <div class="widget-content">
                                <div class="subscribe-form">
                                    <div class="text">Subscribe our newsletter to get our latest update & news</div>
                                    <form method="post">
                                        <div class="form-group">
                                            <input type="email" name="email" class="email" value=""
                                                placeholder="Email Address" />
                                            <button type="button" class="theme-btn btn-style-one"><span class="btn-title"><i
                                                        class="fa fa-paper-plane"></i></span></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <!--Footer Bottom-->
        <div class="footer-bottom">
            <div class="auto-container">
                <div class="inner-container">
                    <div class="copyright-text">
                        <p>&copy; Copyright 2025 by <NuxtLink to="/">m3logi.com</NuxtLink>
                        </p>
                    </div>

                    <ul class="social-icon-two">
                        <li>
                            <NuxtLink to="#"><i class="fab fa-facebook"></i></NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="#"><i class="fab fa-twitter"></i></NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="#"><i class="fab fa-pinterest"></i></NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="#"><i class="fab fa-instagram"></i></NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>