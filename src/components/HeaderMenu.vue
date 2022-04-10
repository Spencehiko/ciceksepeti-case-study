<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useStore } from '../stores/store';

const store = useStore();
const { totalQuantity, totalPrice } = storeToRefs(store);
const formatPrice = (price: number) => {
    return price.toLocaleString('tr-TR', { minimumFractionDigits: 2 });
};
</script>

<template>
    <div class="header">
        <img
            src="@/assets/images/logo.svg"
            alt="Çiçeksepeti"
            class="logo logo-bg"
        />
        <img
            src="@/assets/images/logo-sm.svg"
            alt="Çiçeksepeti"
            class="logo logo-sm"
        />
        <div class="search">
            <img
                src="@/assets/images/search.svg"
                alt="Search"
                class="search-icon"
            />
            <input type="text" placeholder="Ürün Ara" class="search-input" />
            <button type="button" class="search-button">Ara</button>
        </div>
        <div class="cart">
            <img src="@/assets/images/cart.svg" alt="Sepet" class="cart-icon" />
            <span class="cart-text">Sepetim</span>
            <span class="cart-item-count">{{ totalQuantity }}</span>
            <div class="tooltip">
                <img src="@/assets/images/lightning.svg" alt="Fark" />
                <span class="tooltip-text" v-if="500 - totalPrice > 0">
                    <span class="tooltip-money"
                        >{{ formatPrice(500 - totalPrice) }} TL</span
                    >
                    ürün daha ekleyin kargo bedava
                </span>
                <span class="tooltip-text" v-else> Kargonuz bedava! </span>
                <div class="progress-bar">
                    <div
                        class="progress-bar-inner"
                        :style="{
                            width: `${
                                (totalPrice / 500) * 100 < 100
                                    ? (totalPrice / 500) * 100
                                    : 100
                            }%`,
                        }"
                    ></div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    background-color: #fff;
    .logo {
        width: 150px;
        height: 100%;
        margin-right: 20px;
        &-bg {
            display: block;
        }
        &-sm {
            display: none;
        }
    }
    .search {
        display: flex;
        align-items: center;
        background: #f7f7f7;
        border: 2px solid #edf1f2;
        border-radius: 28px;
        padding: 0 10px 0 20px;
        margin-right: auto;
        width: 800px;
        height: 50px;
        &-icon {
            width: 20px;
            height: 20px;
            margin-right: 7px;
        }
        &-input {
            width: 100%;
            height: 30px;
            border: none;
            outline: none;
            font-size: 14px;
            color: #000;
            background: #f7f7f7;
        }
        &-button {
            height: 40px;
            border: none;
            outline: none;
            background: #51B549;
            color: #fff;
            font-size: 18px;
            cursor: pointer;
            border-radius: 28px;
            padding: 0 25px;
        }
    }
    .cart {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 140px;
        max-width: 150px;
        height: 50px;
        background: #044dc3 0% 0% no-repeat padding-box;
        border-radius: 28px;
        opacity: 1;
        border: 2px solid #edf1f2;
        border-radius: 28px;
        cursor: pointer;
        &-icon {
            width: 20px;
            height: 20px;
            margin-right: 7px;
        }
        &-text {
            font-size: 16px;
            color: #fff;
        }
        &-item-count {
            position: absolute;
            top: -5px;
            right: -5px;
            width: 25px;
            height: 25px;
            background: #ff5b4d;
            border-radius: 50%;
            color: #fff;
            font-size: 16px;
            text-align: center;
            line-height: 25px;
        }
    }
    .tooltip {
        position: absolute;
        bottom: -80px;
        right: 0;
        width: 260px;
        background: #f54257;
        border-radius: 7px;
        padding: 10px 20px;
        &:before {
            content: "";
            position: absolute;
            width: 0;
            height: 0;
            border-left: 6px solid transparent;
            border-right: 6px solid transparent;
            border-bottom: 6px solid #f54257;
            top: -6px;
            right: 35px;
            z-index: 5;
        }
        img {
            margin-right: 5px;
        }
        &-text {
            font-size: 14px;
            color: #fff;
        }
        &-money {
            color: #ffce00;
        }
        .progress-bar {
            height: 5px;
            background: #d01d32;
            border-radius: 22px;
            margin-top: 5px;
            margin-left: 13px;
            .progress-bar-inner {
                height: 100%;
                background: #ffce00;
                border-radius: 5px;
            }
        }
    }
}
@media screen and (max-width: 1024px) {
    .header {
        padding: 0 20px;
        .search {
            width: 100%;
            &-input {
                width: 100%;
            }
        }
        .cart {
            margin-left: 10px;
            min-width: 50px;
            width: 100%;
            .tooltip {
                min-width: 350px;
                bottom: -60px;
            }
        }
    }
}
@media screen and (max-width: 480px) {
    .header {
        .logo {
            width: 100px;
            height: auto;
            margin: 0;
            &-bg {
                display: none;
            }
            &-sm {
                display: block;
            }
        }
        .search {
            min-width: 70px;
            &-button {
                display: none;
            }
        }
        .cart {
            width: 100%;
            &-text {
                display: none;
            }
            .tooltip {
                min-width: 150px;
                bottom: -90px;
                right: 1px
            }
        }
    }
}
</style>
