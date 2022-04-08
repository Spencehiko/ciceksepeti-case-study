import { defineStore } from 'pinia'
import categories from '@/datas/categories.json';
import products from '@/datas/products.json';

export const useStore = defineStore({
  id: 'store',
  state: () => ({
    categories: categories,
    categoryId: 0 as number,
    cart: [] as any[],
    addedProducts: [] as number[],
  }),
  getters: {
    categoryName: (state) => {
      if(state.categoryId === 0) return 'Tüm Kategoriler';
      return categories.find((category) => category.id === state.categoryId)?.title;
    },
    products: (state) => {
      if(state.categoryId === 0) return products;
      return products.filter((product) => product.categories.includes(state.categoryId));
    }
  },
  actions: {
    addToCart(productId: number) {
      this.cart.push({id: productId, quantity: 1});
      this.addedProducts.push(productId);
    }
  }
})
