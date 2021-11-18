<template>
  <div class="product">
    <!-- <img :src="product.imgUrl" /> -->
    <h2 class="product__title">{{ product.dish }}</h2>
    <p class="product__price">{{ product.price }} ₿</p>
    <button v-if="!product.isFavorite" @click="addProductToFavorite(product)">
      В избранное
    </button>
    <button v-else @click="removeProductFromFavorite(product)">
      Удалить из избранного
    </button>
    <button @click="addToCart(product)" v-if="!product.inCart">
      В корзину
    </button>
    <div v-else class="product-counter">
      <button @click="minusFromCart(product)">-</button>
      <button @click="addToCart(product)">+</button>
    </div>
    <router-link to="/cart">в корзине: {{ product.countInCart }}</router-link>
  </div>
</template>

<script>
import { mapActions } from "vuex";

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
    ...mapActions({
      addProductToCart: "addProductToCart",
      minusFromCart: "minusFromCart",
      addProductToFavorite: "addProductToFavorite",
      removeProductFromFavorite: "removeProductFromFavorite",
    }),
    addToCart(product) {
      this.product.inCart = false;
      this.addProductToCart(product);
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
