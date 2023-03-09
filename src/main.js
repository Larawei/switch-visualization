import { createApp } from 'vue';

import './style.css';
import '@arco-design/web-vue/dist/arco.css';

import ArcoVue from '@arco-design/web-vue';
import App from './App.vue';

const app = createApp(App);
app.use(ArcoVue);
app.mount('#app');
