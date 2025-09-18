<template>
    <section class="tracking-section pull-down">
        <div class="auto-container">
            <div class="outer-box">
                <div class="arrow-box wow fadeInRight">
                    <img src="/images/icons/arrow-2.png" alt="" class="icon">
                    <span class="title">Results in <br>few seconds</span>
                </div>
                <div class="tracking-form">
                    <h4 class="title">Track your <br>Order</h4>
                    <!-- Tracking Form -->
                    <form method="post" action="job-list-v10">
                        <div class="row">
                            <div class="form-group col-lg-4 col-md-12 col-sm-12">
                                <span class="icon lnr-icon-user"></span>
                                <input type="text" name="field_name" placeholder="Your Tracking ID Now">
                            </div>
                            <!-- Form Group -->
                            <div class="form-group col-lg-4 col-md-12 col-sm-12">
                                <span class="icon lnr-icon-envelope1"></span>
                                <input type="text" name="field_name" placeholder="Your Email Address">
                            </div>
                            <!-- Form Group -->
                            <div class="form-group col-lg-4 col-md-12 col-sm-12 text-end">
                                <button type="submit" class="theme-btn btn-style-one"><span class="btn-title">Track
                                        Order</span></button>
                            </div>
                        </div>
                    </form>
                    <!-- End Tracking Form -->
                </div>
            </div>
        </div>
    </section>
</template>