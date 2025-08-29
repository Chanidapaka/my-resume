import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/view/HomePage.vue";
import ResumePage from "../components/view/ResumePage.vue";
import AboutPage from "../components/view/AboutPage.vue";
const routes = [
  {  path: '/',
        name: 'HomePage',
        component: HomePage
  },
  { path: "/resume", 
    component: ResumePage },
  { path: "/about", 
    component: AboutPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
