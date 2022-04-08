import { defineStore } from 'pinia'
import categories from '@/datas/categories.json';
import products from '@/datas/products.json';

export const useStore = defineStore({
  id: 'store',
  state: () => ({
    categories: categories,
    categoryId: 0 as number,
    cart: [] as any[],
  }),
  getters: {
    categoryName: (state) => {
      if (state.categoryId === 0) return 'Tüm Kategoriler';
      return categories.find((category) => category.id === state.categoryId)?.title;
    },
    products: (state) => {
      if (state.categoryId === 0) return products;
      return products.filter((product) => product.categories.includes(state.categoryId));
    },
    productQuantity: (state) => (productId: number) => {
      const product = state.cart.find((product) => product.id === productId);
      return product ? product.quantity : 0;
    },
    totalQuantity: (state) => {
      return state.cart.reduce((total, product) => total + product.quantity, 0);
    }
  },
  actions: {
    addToCart(productId: number) {
      this.cart.push({ id: productId, quantity: 1 });
    },
    changeQuantity(productId: number, quantity: number) {
      const product = this.cart.find((product) => product.id === productId);
      if (product) product.quantity += quantity;
      if (product.quantity === 0) this.removeFromCart(productId);
    },
    removeFromCart(productId: number) {
      this.cart = this.cart.filter((product) => product.id !== productId);
    },
  }
});
