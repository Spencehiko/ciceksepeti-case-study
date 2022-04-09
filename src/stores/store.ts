import { defineStore } from 'pinia'
import categories from '@/datas/categories.json';
import products from '@/datas/products.json';

interface Category {
  id: number;
  title: string;
}
interface Product {
  id: number;
  title: string;
  imgSrc: string;
  categories: number[];
  isFreeDelivery: boolean;
  price: number;
}
interface CartProduct {
  id: number;
  quantity: number;
  price: number;
}

export const useStore = defineStore({
  id: 'store',
  state: () => ({
    categories: categories as Category[],
    products: products as Product[],
    productId: 0 as number,
    categoryId: 0 as number,
    cart: [] as any[],
  }),
  getters: {
    categoryName(): string {
      if (this.categoryId === 0) return 'Tüm Kategoriler';
      return this.categories.find((category) => category.id === this.categoryId)?.title || 'Tüm Kategoriler';
    },
    products(): Product[] {
      if (this.categoryId === 0) return products;
      return products.filter((product) => product.categories.includes(this.categoryId));
    },
    productQuantity: (state) => (productId: number) => {
      const product = state.cart.find((product) => product.id === productId);
      return product?.quantity || 0;
    },
    productPrice: (state) => (productId: number) => {
      const product = state.products.find((product) => product.id === productId);
      return product?.price || 0;
    },
    totalQuantity(): number {
      return this.cart.reduce((total: number, product: CartProduct) => total + product.quantity, 0);
    },
    totalPrice(): number {
      return this.cart.reduce((total: number, product: CartProduct) => total + this.productPrice(product.id) * product.quantity, 0);
    },
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
