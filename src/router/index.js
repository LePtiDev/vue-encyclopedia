import Vue from "vue";
import VueRouter from "vue-router";

import ButtonView from "@/views/ButtonView.vue";
import ChipsView from "@/views/ChipsView.vue";
import TabView from "@/views/TabView.vue";
import CardView from "@/views/CardView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/button",
    name: "button",
    component: ButtonView,
  },
  {
    path: "/chips",
    name: "chips",
    component: ChipsView,
  },
  {
    path: "/tabs",
    name: "tabs",
    component: TabView,
  },
  {
    path: "/card",
    name: "card",
    component: CardView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
