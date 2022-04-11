import Vue from 'vue'
import VueRouter from 'vue-router'
import RegistrationView from '../views/UserSignUp.vue'
import LoginUser from '../views/LoginUser.vue'
import ForgetPass from '../views/Forget.vue'
import ResetPass from '../views/Reset.vue'
import HomeView from '../views/HomePage.vue'
import GetAllNotes from '../components/GetAllNotes.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/signup',
    name: 'RegistrationView',
    component: RegistrationView
  },
  {
    path: '/login',
    name: 'LoginUser',
    component: LoginUser
  },
  {
    path: '/forget',
    name: 'ForgetPass',
    component: ForgetPass
  },
  {
    path: '/resetpassword/:token',
    name: 'ResetPass',
    component: ResetPass
  },
  {
    path: '/home',
    name: 'HomeView',
    component: HomeView,
    children: [
      {
        name: 'getall',
        path: 'notes',
        component: GetAllNotes
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
