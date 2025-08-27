import './assets/all.scss';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

//  import Bootstrap 5
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';





createApp(App).use(router).mount('#app');
