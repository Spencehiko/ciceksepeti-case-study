<script setup lang="ts">
</script>

<template>
    <div class="header">
        <img src="@/assets/images/logo.svg" alt="Çiçeksepeti" class="logo logo-bg" />
        <img src="@/assets/images/logo-sm.svg" alt="Çiçeksepeti" class="logo logo-sm" />
        <div class="search">
            <img
                src="@/assets/images/search.svg"
                alt="Search"
                class="search-icon"
            />
            <input type="text" placeholder="Ürün Ara" class="search-input" />
        </div>
        <div class="cart">
            <img src="@/assets/images/cart.svg" alt="Sepet" class="cart-icon" />
            <span class="cart-text">Sepetim</span>
            <span class="cart-item-count">0</span>
        </div>
    </div>
</template>

<style lang="less" scoped>
.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 220px 0;
    height: 60px;
    background-color: #fff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
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
        background: #f7f7f7 0% 0% no-repeat;
        border: 2px solid #edf1f2;
        border-radius: 28px;
        padding: 0 20px;
        margin-right: auto;
        width: 800px;
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
            background: #f7f7f7 0% 0% no-repeat;
        }
    }
    .cart {
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
        position: relative;
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
            min-width: 50px;
            width: 100%;
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
        }
        .cart {
            width: 100%;
            &-text {
                display: none;
            }
        }
    }
}
</style>
