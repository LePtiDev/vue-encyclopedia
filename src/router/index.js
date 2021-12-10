import Vue from "vue";
import VueRouter from "vue-router";

import ButtonView from "@/views/ButtonView.vue";
import ChipsView from "@/views/ChipsView.vue";
import SliderView from "@/views/SliderView.vue";

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
    path: "/slider",
    name: "slider",
    component: SliderView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
