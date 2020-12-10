import Vue from 'vue'
import VueRouter from 'vue-router'
import { firebaseApp } from './firebaseApp'

import store from './store'
import routes from './routes'

// components
import App from './components/App.vue'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: routes
});

firebaseApp.auth().onAuthStateChanged(user => {
    if (user) {
        store.dispatch("signIn", user);
        router.push('./dashboard').catch(() => {});
    } else {
        router.push('./sign-in').catch(() => {});
    }
});

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});