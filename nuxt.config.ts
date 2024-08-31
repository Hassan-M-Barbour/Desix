import { resolve } from "path"
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    alias: {
        "@": resolve(__dirname, "/"),
    },
    app: {
        head: {
            meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }],
           // title: "ROSETECH - TA DITT FÖRETAG TILL NÄSTA NIVÅ",
            script: []
        }
    },
    css: [
        'swiper/css',
        'swiper/css/navigation',
        'swiper/css/pagination',
        "public/css/bootstrap.min.css",
        "public/css/style.css"
    ],
    modules: ['nuxt-resend', "nuxt-gtag"] ,
      
    gtag: {
        id: 'G-J9F6ZT1H5X'
      } 
})