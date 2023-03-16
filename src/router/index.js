import { createRouter, createWebHistory } from "vue-router";
import About from "@/components/about.component.vue";
import LandingPage from "@/components/landing-page.component.vue";
import RepoData from "@/components/repo-data.component.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: LandingPage, component: LandingPage },
    { path: "/about", name: About, component: About },
    { path: "/repos", name: RepoData, component: RepoData },
  ],
});

export default router;