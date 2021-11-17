<template>
  <div id="app">
    <router-link to="/">Магазин</router-link>
    <router-link to="/cart">Корзина</router-link>
    <router-link to="/favorite">Избранное</router-link>
    <router-view />
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "App",
  data() {
    return {};
  },
  methods: {
    ...mapActions(["getAllProducts"]),
  },
  mounted() {
    this.$store.dispatch("getAllProducts");
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;700&display=swap");
#app {
  font-family: Raleway, sans-serif;
  color: #2c3e50;
  box-sizing: border-box;
}

* {
  box-sizing: border-box;
}
</style>
