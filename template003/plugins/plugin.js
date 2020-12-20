import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper/dist/ssr'
import Vue2Filters from 'vue2-filters'
import { VueMasonryPlugin } from 'vue-masonry'
import InfiniteLoading from 'vue-infinite-loading'
import firebase from 'firebase/app'
import PayPal from 'vue-paypal-checkout'
import VueLazyLoad from 'vue-lazyload'
import ProductZoomer from 'vue-product-zoomer'
import VueScrollTo from 'vue-scrollto'

Vue.use(VueAwesomeSwiper)
Vue.use(Vue2Filters)
Vue.use(VueMasonryPlugin)
Vue.use(InfiniteLoading)
Vue.component('paypal-checkout', PayPal)
Vue.use(VueLazyLoad)
Vue.use(ProductZoomer)
Vue.use(VueScrollTo)

const config = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTHDOMAIN',
  databaseURL: 'YOUR_DATABASE_URL',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_STORAGE_BACKET',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID'
}
firebase.initializeApp(config)
