import Vue from "vue";
import Router from "vue-router";

import Shop from "../components/Shop.vue";
import Cart from "../components/Cart.vue";
import Favorite from "../components/Favorite.vue";

Vue.use(Router);

export default new Router({
  mode: "history", // default 'hash'
  routes: [
    {
      path: "/",
      component: Shop,
    },
    {
      path: "/cart",
      component: Cart,
    },
    {
      path: "/favorite",
      component: Favorite,
    },
  ],
});
