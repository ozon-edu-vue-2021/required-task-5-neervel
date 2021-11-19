<template>
  <div class="favorite">
    <h1>Избранное</h1>
    <div class="favorite-empty" v-if="favoriteProducts.length < 1">
      Избранных товаров нет
    </div>
    <div class="favorite-products" v-else>
      <Product
        v-for="product in favoriteProducts"
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
  name: "Favorite",
  components: {
    Product,
  },
  computed: {
    ...mapState(["allProducts"]),
    favoriteProducts() {
      return this.allProducts.filter((item) => item.isFavorite === true);
    },
  },
};
</script>

<style scoped>
.favorite {
  padding: 30px;
}
.favorite-products {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}
</style>
