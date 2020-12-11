import SignIn from './components/SignIn.vue'
import SignUp from './components/SignUp.vue'
import Dashboard from './components/Dashboard.vue'

const routes = [
    { path: '/sign-in', component: SignIn, name: "sign in" },
    { path: '/sign-up', component: SignUp, name: "sign up" },
    { path: '/dashboard', component: Dashboard, name: "dashboard" },
]

export default routes;