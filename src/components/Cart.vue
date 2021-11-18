<template>
  <div class="cart">
    <h1>Корзина</h1>
    <div class="cart-empty" v-if="productsInCart.length < 1">
      Корзина пустая
    </div>
    <div v-else>
      <div class="cart-products">
        <Product
          v-for="product in productsInCart"
          :key="product.uid"
          :product="product"
        />
      </div>
      <button class="cart-order" @click="createOrder">Оформить</button>
    </div>
  </div>
</template>

<script>
import Product from "./Product.vue";
import { mapState } from "vuex";
export default {
  name: "Cart",
  components: {
    Product,
  },
  computed: {
    ...mapState(["allProducts"]),
    productsInCart() {
      return this.allProducts.filter((item) => item.inCart);
    },
  },
  methods: {
    createOrder() {
      alert(JSON.stringify(this.productsInCart));
    },
  },
};
</script>

<style scoped>
.cart {
  padding: 30px;
}
.cart-products {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(3, 1fr);
}
.cart-order {
  margin: 30px auto;
}
</style>
