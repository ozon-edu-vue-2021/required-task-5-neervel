import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: () => ({
    allProducts: [],
    productsInCart: [],
  }),
  mutations: {
    addAllProducts(store, items) {
      items.forEach((item) => {
        item.price = Math.floor(Math.random() * 500);
        const imgNumber = Math.floor(Math.random() * 12);
        item.imgUrl = `..src/assets/images/${imgNumber}.webp`;
        item.inCart = false;
        item.isFavorite = false;
        item.countInCart = 0;
        store.allProducts.push(item);
      });
    },
    addProductToCart(store, selectedProduct) {
      if (!selectedProduct.inCart) {
        store.allProducts.forEach((product) => {
          if (product.uid === selectedProduct.uid) {
            product.inCart = true;
            product.countInCart += 1;
          }
        });
      } else {
        store.allProducts.forEach((product) => {
          if (product.uid === selectedProduct.uid) {
            product.countInCart += 1;
          }
        });
      }
    },
    minusFromCart(store, selectedItem) {
      store.allProducts.forEach((item) => {
        if (item.uid == selectedItem.uid) {
          item.countInCart--;
          if (item.countInCart <= 0) {
            item.inCart = false;
          }
        }
      });
    },
    addProductToFavorite(store, favoriteProduct) {
      store.allProducts.forEach((product) => {
        if (product.uid === favoriteProduct.uid) {
          product.isFavorite = true;
        }
      });
    },
    removeProductFromFavorite(store, selectedItem) {
      store.allProducts.forEach((item) => {
        if (item.uid == selectedItem.uid) {
          item.isFavorite = false;
        }
      });
    },
  },
  actions: {
    getAllProducts: async (context) => {
      await axios
        .get("https://random-data-api.com/api/food/random_food?size=30")
        .then((response) => {
          context.commit("addAllProducts", response.data);
        });
    },
    addProductToCart: (context, item) => {
      context.commit("addProductToCart", item);
    },
    minusFromCart: (context, item) => {
      context.commit("minusFromCart", item);
    },
    addProductToFavorite: (context, item) => {
      context.commit("addProductToFavorite", item);
    },
    removeProductFromFavorite: (context, item) => {
      context.commit("removeProductFromFavorite", item);
    },
  },
});
