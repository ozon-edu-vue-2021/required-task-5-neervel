<template>
  <div class="shop">
    <h1>Лучший магазин (после Ozon)</h1>
    <div class="shop-loading" v-if="allProducts.length < 1">Loading...</div>
    <div v-else class="shop-products">
      <Product
        v-for="product in allProducts"
        :key="product.uid"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import Product from "./Product.vue";
import { mapState } from "vuex";

export default {
  name: "Shop",
  computed: {
    ...mapState(["allProducts"]),
  },
  components: {
    Product,
  },
};
</script>

<style scoped>
.shop {
  padding: 30px;
}
.shop-products {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
}
</style>
