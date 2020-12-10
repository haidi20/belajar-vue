import SignIn from './components/SignIn.vue'
import Dashboard from './components/Dashboard.vue'

const routes = [
    { path: '/sign-in', component: SignIn, name: "sign in" },
    { path: '/dashboard', component: Dashboard, name: "dashboard" },
]

export default routes;