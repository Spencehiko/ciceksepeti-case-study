<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useStore } from '../stores/store';

const store = useStore();
const { addToCart, changeQuantity } = store;
const { products, categoryName, productQuantity } = storeToRefs(store);

const formatPrice = (price: number) => {
    return price.toLocaleString('tr-TR', { minimumFractionDigits: 2 });
};
</script>
<template>
    <div class="shop">
        <div class="header">
            <img src="@/assets/images/leaf.svg" alt="Tüm Kategoriler" />
            <span>{{ categoryName }}</span>
        </div>
        <div class="products" v-if="products.length">
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
                        <span>{{ formatPrice(product.price) }} TL</span>
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
        <div class="no-products" v-else>
            <span>Ürün Bulunamadı</span>
        </div>
    </div>
</template>
<style lang="less" scoped>
.shop {
    padding-bottom: 10px;
    .header {
        margin-bottom: 10px;
        img {
            width: 20px;
            height: 19px;
        }
        span {
            font-size: 20px;
            font-weight: lighter;
            color: var(--color-dark-gray);
            margin-left: 5px;
        }
    }
    .products {
        display: flex;
        flex-wrap: wrap;
        gap: 30px 20px;
        .product {
            height: 100%;
            flex-grow: 0;
            flex-basis: calc(20% - 60px);
            border: 1px solid var(--color-light-gray);
            padding: 20px;
            font-size: 15px;
            font-weight: 600;
            .image {
                cursor: pointer;
                img {
                    margin: 0 auto;
                    width: 100%;
                }
            }
            .info {
                .title {
                    cursor: pointer;
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
                        color: var(--color-darker-gray);
                    }
                }
                .price {
                    margin-bottom: 5px;
                    span {
                        font-size: 18px;
                        font-weight: lighter;
                        color: var(--color-black)000;
                    }
                }
                .free-delivery {
                    min-height: 1.5rem;
                    margin-bottom: 5px;
                    span {
                        font-size: 14px;
                        color: var(--color-green);
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        overflow: hidden;
                    }
                }
                .add-to-cart {
                    width: 100%;
                    border: 1px solid var(--color-blue);
                    background: var(--color-white);
                    color: var(--color-blue);
                    font-size: 14px;
                    font-weight: 600;
                    border-radius: 20px;
                    padding: 10px 0;
                    cursor: pointer;
                    transition: all 0.4s;
                    &:hover {
                        background: var(--color-blue);
                        color: var(--color-white);
                    }
                }
                .buttons-div {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border: 1px solid var(--color-light-gray);
                    border-radius: 25px;
                    .decrease,
                    .increase {
                        border-radius: 50%;
                        border: none;
                        background: var(--color-white);
                        cursor: pointer;
                        transition: all 0.4s;
                        img {
                            display: inline-block;
                            width: 30px;
                            height: 30px;
                            vertical-align: middle;
                        }
                    }
                    .quantity {
                        font-size: 18px;
                        font-weight: lighter;
                        color: var(--color-black)000;
                    }
                }
            }
        }
    }
    .no-products {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        flex-grow: 0;
        flex-basis: calc(20% - 60px);
        border: 1px solid var(--color-light-gray);
        padding: 20px;
        font-size: 15px;
        font-weight: 600;
        span {
            font-size: 20px;
            font-weight: 500;
            color: var(--color-black);
        }
    }
}
@media (max-width: 1226px) {
    .shop {
        .products {
            .product {
                flex-basis: calc(33% - 60px);
            }
        }
    }
}
@media screen and (max-width: 1024px) {
    .shop {
        padding: 0 20px;
    }
}
@media screen and (max-width: 480px) {
    .shop {
        .products {
            .product {
                flex-basis: calc(100% - 60px);
                margin: 0 auto;
            }
        }
    }
}
</style>