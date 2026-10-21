import { createRouter, createWebHashHistory } from 'vue-router';
import PocetnaView from './views/PocetnaView.vue';
import OAplikacijiView from './views/OAplikacijiView.vue';

// Hash povijest: radi bez konfiguracije poslužitelja i u WebViewu (SPA, jedan index.html).
export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: PocetnaView },
    { path: '/o-aplikaciji', component: OAplikacijiView },
  ],
});
