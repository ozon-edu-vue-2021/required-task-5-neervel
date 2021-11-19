<template>
  <div id="app">
    <nav class="main-nav">
      <ul>
        <li>
          <router-link to="/">Магазин</router-link>
        </li>
        <li>
          <router-link to="/cart">Корзина</router-link>
        </li>
        <li>
          <router-link to="/favorite">Избранное</router-link>
        </li>
      </ul>
    </nav>
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
    ...mapActions({
      getAllProducts: "getAllProducts",
    }),
  },
  mounted() {
    this.getAllProducts();
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

.main-nav {
  max-width: 90%;
  margin: 0 auto;
  padding: 30px 0;
}

.main-nav ul {
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
}

.main-nav li {
  margin: 0 20px;
}

.main-nav li a {
  text-decoration: none;
  color: #2c3e50;
}

.main-nav li a.router-link-exact-active {
  color: blue;
  font-weight: 500;
}

button {
  border: none;
  border-radius: 5px;
  color: white;
  background-color: blue;
  cursor: pointer;
  padding: 10px 20px;
  display: block;
  height: 40px;
}
</style>
