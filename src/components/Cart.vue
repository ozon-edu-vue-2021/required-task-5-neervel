<template>
  <div class="cart">
    <h1>Корзина</h1>
    <div class="cart-empty" v-if="productsInCart.length < 1">
      Корзина пустая
    </div>
    <div class="cart-products" v-else>
      <ProductInCart
        v-for="product in productsInCart"
        :key="product.uid"
        :product="product"
      />
    </div>
    <button @click="createOrder">Оформить</button>
  </div>
</template>

<script>
import ProductInCart from "./ProductInCart.vue";
import { mapState } from "vuex";
export default {
  name: "Cart",
  components: {
    ProductInCart,
  },
  computed: {
    ...mapState(["allProducts"]),
    productsInCart() {
      return this.allProducts.filter((item) => item.inCart === true)
    },
  },
  methods: {
    createOrder() {
      alert(JSON.stringify(this.productsInCart));
    },
  },
};
</script>

<style></style>
