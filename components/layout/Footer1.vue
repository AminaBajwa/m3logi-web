<script setup>
const downloadPDF = () => {
  const link = document.createElement('a')
  link.href = '/2025ENG.pdf'
  link.download = '2025ENG.pdf'
  link.click()
}
</script>

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
                            <div class="text">Aks Hatchobori Bldg 5 Floor, 2 Chome 27-6, Hatchobori, Chuo-ku, Tokyo-to Japan</div>
                        </div>
                    </div>

                    <!-- Contact Info Block -->
                    <div class="contact-info-block col-lg-4 col-md-6 col-sm-12 wow fadeInRight" data-wow-delay="300ms">
                        <div class="inner-box">
                            <div class="icon-box"><i class="icon flaticon-stock-1"></i></div>
                            <h4 class="title">Contact</h4>
                            <div class="text">
                                <NuxtLink to="mailto:sales@m3Logi.com ">sales@m3Logi.com </NuxtLink>
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
                            <div class="text">m3Logi brings the world closer together we provide you with the best possible service tailored to your needs.</div>
                            <!-- <NuxtLink to="/page-about" class="theme-btn btn-style-one hvr-light small"><span
                                    class="btn-title">Company Profile</span></NuxtLink> -->

                             <NuxtLink to="#" class="theme-btn btn-style-one hvr-light small" @click.prevent="downloadPDF">
                                <span class="btn-title">Company Profile</span>
                            </NuxtLink>       
                        </div>
                    </div>

                    <!--Footer Column-->
                    <div class="footer-column col-xl-3 col-lg-3 col-md-6 col-sm-12">
                        <div class="footer-widget">
                            <h3 class="widget-title">Service</h3>
                            <ul class="user-links">
                                <li>
                                    <NuxtLink to="#"> Land Transportation</NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="#">Ocean Transportation</NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="#">Yard Services</NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="#">Air Cargo</NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="#">Customs Clearance</NuxtLink>
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
                                        <NuxtLink to="#"><img src="/images/clients/c0.png" alt="">
                                        </NuxtLink>
                                    </figure>

                                    <figure class="image">
                                        <NuxtLink to="#"><img src="/images/clients/c1.png" alt="">
                                        </NuxtLink>
                                    </figure>

                                    <figure class="image">
                                        <NuxtLink to="#"><img src="/images/clients/c2.png" alt="">
                                        </NuxtLink>
                                    </figure>

                                    <figure class="image">
                                        <NuxtLink to="#"><img src="/images/clients/c3.png" alt="">
                                        </NuxtLink>
                                    </figure>

                                    <figure class="image">
                                        <NuxtLink to="#"><img src="/images/clients/c4.png" alt="">
                                        </NuxtLink>
                                    </figure>

                                    <figure class="image">
                                        <NuxtLink to="#"><img src="/images/clients/c5.png" alt="">
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
                        <p>&copy; Copyright 2025 by <NuxtLink to="/">m3Logi.com</NuxtLink>
                        </p>
                    </div>

                    <ul class="social-icon-two">
                        <li>
                        <NuxtLink to="https://web.facebook.com/m3Logi/"><span class="fab fa-facebook-square"></span></NuxtLink>
                    </li>
                    <!-- <li>
                        <NuxtLink to="https://twitter.com/m3Logi"><span class="fab fa-tiktok"></span></NuxtLink>
                    </li> -->
                    <li>
                        <NuxtLink to="https://www.instagram.com/m3.logi/"><span class="fab fa-instagram"></span></NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="#"><span class="fab fa-youtube"></span></NuxtLink>
                    </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>