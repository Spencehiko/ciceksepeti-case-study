<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useStore } from '../stores/store';

const store = useStore();
const { addToCart, changeQuantity } = store; 
const { products, categoryName, productQuantity } = storeToRefs(store);

</script>
<template>
    <div class="shop">
        <div class="header">
            <img src="@/assets/images/leaf.svg" alt="Tüm Kategoriler" />
            <span>{{ categoryName }}</span>
        </div>
        <div class="products">
            <div class="product" v-for="product in products" :key="product.id">
                <div class="image">
                    <img :src="product.imgSrc" :alt="product.title" />
                </div>
                <div class="info">
                    <div class="title">
                        <span>{{ product.title }}</span>
                    </div>
                    <div class="free-delivery">
                        <span v-if="product.isFreeDelivery"
                            >Ücretsiz Teslimat</span
                        >
                    </div>
                    <div class="price">
                        <span>{{ product.price }} TL</span>
                    </div>
                    <button
                        type="button"
                        class="add-to-cart"
                        @click="addToCart(product.id)"
                        v-if="!productQuantity(product.id)"
                    >
                        Sepete Ekle
                    </button>
                    <div class="buttons-div" v-else>
                        <button
                            class="decrease"
                            @click="changeQuantity(product.id, -1)"
                        >
                            <img
                                src="@/assets/images/minus.png"
                                alt="Azalt"
                                width="30"
                                height="30"
                            />
                        </button>
                        <span class="quantity">{{
                            productQuantity(product.id)
                        }}</span>
                        <button
                            class="increase"
                            @click="changeQuantity(product.id, 1)"
                        >
                            <img src="@/assets/images/add.svg" alt="Artır" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
.shop {
    .header {
        margin-bottom: 10px;
        img {
            width: 20px;
            height: 19px;
        }
        span {
            font-size: 20px;
            font-weight: lighter;
            color: #707070;
            margin-left: 5px;
        }
    }
    .products {
        display: flex;
        flex-wrap: wrap;
        gap: 30px 20px;
        .product {
            height: 100%;
            flex-grow: 1;
            flex-shrink: 0;
            flex-basis: calc(20% - 60px);
            border: 1px solid #e2e7e9;
            padding: 20px;
            font-size: 15px;
            font-weight: 600;
            .image {
                img {
                    margin: 0 auto;
                    width: 100%;
                }
            }
            .info {
                .title {
                    min-height: 4rem;
                    span {
                        margin-bottom: 5px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 2; /* number of lines to show */
                        line-clamp: 2;
                        -webkit-box-orient: vertical;
                        font-size: 18px;
                        font-weight: lighter;
                        color: #555555;
                    }
                }
                .price {
                    margin-bottom: 5px;
                    span {
                        font-size: 18px;
                        font-weight: lighter;
                        color: #000000;
                    }
                }
                .free-delivery {
                    min-height: 1.5rem;
                    margin-bottom: 5px;
                    span {
                        font-size: 14px;
                        color: #51b549;
                    }
                }
                .add-to-cart {
                    width: 100%;
                    border: 1px solid var(--color-blue);
                    background: #fff;
                    color: var(--color-blue);
                    font-size: 14px;
                    font-weight: 600;
                    border-radius: 20px;
                    padding: 10px 0;
                    cursor: pointer;
                    transition: all 0.4s;
                    &:hover {
                        background: var(--color-blue);
                        color: #fff;
                    }
                }
            }
        }
    }
}
</style>