<template>
  <div class="product">
    <h2 class="product__title">{{ product.dish }}</h2>
    <p class="product__price">
      {{ product.price }} ₿ X {{ product.countInCart }}
    </p>
    <button @click="removeFromCart(product)">Удалить из корзины</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "Product",
  props: {
    product: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    ...mapMutations(["removeProductFromCart"]),
    removeFromCart(product) {
      this.$store.commit("removeProductFromCart", product);
    },
  },
};
</script>

<style></style>
