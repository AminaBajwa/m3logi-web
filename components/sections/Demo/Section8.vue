<template>
    <section class="team-section">
        <div class="auto-container">
            <div class="sec-title text-center">
                <span class="sub-title">{{ $t('brands.subtitle') }}</span>
                <h2>{{ $t('brands.title') }}</h2>
            </div>

            <div class="row">
                <!-- Team block -->
                <div class="team-block col-lg-4 col-md-6 col-sm-12" v-for="(brand, index) in brands" :key="index">
                    <div class="inner-box">
                        <div class="image-box">
                            <figure class="image">
                                <NuxtLink :to="brand.link"><img :src="brand.image" alt=""></NuxtLink>
                            </figure>
                            <div class="social-links" v-if="brand.social">
                                <NuxtLink v-for="(social, i) in brand.social" :key="i" :to="social.url">
                                    <i :class="social.icon" aria-hidden="true"></i>
                                </NuxtLink>
                            </div>
                        </div>
                        <div class="info-box">
                            <h4 class="name">
                                <NuxtLink :to="brand.link">{{ $t(brand.name) }}</NuxtLink>
                            </h4>
                            <span>{{ $t(brand.desc) }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            brands: [
                {
                    image: '/images/clients/c0.png',
                    link: '',
                    name: 'brands.marinelogi.name',
                    desc: 'brands.marinelogi.desc',
                    social: [
                        { url: 'https://www.marinelogi.com/', icon: 'fab fa-google-play' },
                        { url: 'https://www.marinelogi.com/', icon: 'fab fa-app-store-ios' }
                    ]
                },
                {
                    image: '/images/clients/c1.png',
                    link: '',
                    name: 'brands.carcarrier.name',
                    desc: 'brands.carcarrier.desc',
                    social: [
                        { url: 'https://www.carcarrier.co.jp/', icon: 'fab fa-google-play' },
                        { url: 'https://www.carcarrier.co.jp/', icon: 'fab fa-app-store-ios' }
                    ]
                },
                {
                    image: '/images/clients/c2.png',
                    link: '',
                    name: 'brands.automechanic.name',
                    desc: 'brands.automechanic.desc'
                },
                {
                    image: '/images/clients/c3.png',
                    link: '',
                    name: 'brands.warehouse.name',
                    desc: 'brands.warehouse.desc'
                },
                {
                    image: '/images/clients/c4.png',
                    link: '',
                    name: 'brands.drayage.name',
                    desc: 'brands.drayage.desc'
                },
                {
                    image: '/images/clients/c5.png',
                    link: '',
                    name: 'brands.custombroker.name',
                    desc: 'brands.custombroker.desc'
                }
            ]
        }
    }
}
</script>
