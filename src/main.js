import './assets/all.scss';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

//  import Bootstrap 5
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import 'swiper/css/bundle' // 加這行



createApp(App).use(router).mount('#app');
