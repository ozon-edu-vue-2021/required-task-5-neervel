<template>
  <div class="product">
    <!-- <img :src="product.imgUrl" /> -->
    <h2 class="product__title">{{ product.dish }}</h2>
    <p class="product__price">{{ product.price }} ₿</p>
    <button v-if="!product.isFavorite" @click="addToFavorite(product)">
      В избранное
    </button>
    <button v-else @click="removeFromFavorite(product)">
      Удалить из избранного
    </button>
    <button @click="addToCart(product)" v-if="!product.inCart">
      В корзину
    </button>
    <div v-else class="product-counter">
      <button @click="removeFromCart(product)">-</button>
      <button @click="addToCart(product)">+</button>
    </div>
    <router-link to="/cart">в корзине: {{ product.countInCart }}</router-link>
  </div>
</template>

<script>
/*
переписать создание продуктов - добавить мутации для добавления в корзину и изменения количества, добавить кнопку избранное
*/
import { mapMutations } from "vuex";

export default {
  name: "Product",
  data() {
    return {
      isAddedToCart: false,
    };
  },
  props: {
    product: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    ...mapMutations([
      "addProductToCart",
      "minusFromCart",
      "addProductToFavorite",
      "removeProductFromFavorite",
    ]),
    addToCart(product) {
      this.product.inCart = false;
      this.$store.commit("addProductToCart", product);
    },
    removeFromCart(product) {
      this.$store.commit("minusFromCart", product);
    },
    addToFavorite(product) {
      this.$store.commit("addProductToFavorite", product);
    },
    removeFromFavorite(product) {
      this.$store.commit("removeProductFromFavorite", product);
    },
  },
};
</script>

<style scoped>
.product {
  background-color: rgb(230, 229, 248);
  border-radius: 15px;
  padding: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.product button {
  margin: 10px auto;
}
.product-counter {
  display: flex;
  align-items: center;
}
.product-counter button {
  margin: 10px;
}
</style>
