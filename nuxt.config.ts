import { resolve } from "path"
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    alias: {
        "@": resolve(__dirname, "/"),
    },
    app: {
        head: {
          link: [
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
            meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }],
            title: "m3Logi | Logistics ",
            script: []
        }
    },
    css: [
        'swiper/css',
        'swiper/css/navigation',
        'swiper/css/pagination',
        // 'swiper/css/free-mode',
        // 'swiper/css/thumbs',
        "public/css/bootstrap.min.css",
        "public/css/style.css",
        "public/css/responsive.css",
        'glightbox/dist/css/glightbox.min.css',
    ],
    modules: [
        [
            "@nuxtjs/google-fonts",
            {
                families: {
                    Chivo: {
                        wght: [400, 700, 900]
                    },
                    "Noto+Sans": {
                        wght: [400, 500, 600, 700,800]
                    },
                    download: true,
                    inject: true
                }
            }
        ],
    ],
})
