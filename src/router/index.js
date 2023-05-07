import { createRouter, createWebHistory } from "vue-router";
import Policy from "@/views/Policy";
const routes = [
  {
    path: "/",
    name: "policy",
    component: Policy,
    meta: {
      title: "“绿”箱计划——政策展示"
    }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
