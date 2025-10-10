<template>
    <section class="call-to-action" style="background-image: url(./images/background/2.jpg)">
        <div class="auto-container">
            <div class="outer-box">
                <NuxtLink @click="openVideo" class="play-now lightbox-image"><i class="icon fa fa-play"></i><span
                        class="ripple"></span></NuxtLink>
                <div class="sec-title light mb-0">
                    <div class="sub-title">Get in touch with us anytime</div>
                    <h1>Looking for the best <br>logistics & transport service?</h1>
                    <NuxtLink to="/page-services" class="theme-btn btn-style-one hvr-light"><span class="btn-title">Get
                            A Quote</span></NuxtLink>
                </div>
            </div>
        </div>
    </section>
    <modal-video :channel="videoChannel" :videoId="videoId" v-model:isOpen="videoIsOpen" />
</template>
<script>
import ModalVideo from '../../components/elements/ModalVideo.vue'
export default {
    components: {
        ModalVideo
    },
    data: () => {
        return {
            videoIsOpen: false
        }
    },
    methods: {
        openVideo() {
            this.videoIsOpen = !this.videoIsOpen
        }
    },
    computed: {
        videoChannel: function () {
            //Logic to extract based on URL
            return 'youtube'
        },
        videoId: function () {
            //Logic to extract based on URL
            return 'QiqQoqtnHrk'
        }
    }
}
</script>