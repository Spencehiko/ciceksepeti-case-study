<script setup lang="ts">
import HeaderMenu from "./components/HeaderMenu.vue";
import FilterMenu from "./components/FilterMenu.vue";
import ShopItems from "./components/ShopItems.vue";
import CampaignItems from "./components/CampaignItems.vue";
import FooterMenu from "./components/FooterMenu.vue";
</script>

<template>
    <header>
        <HeaderMenu />
        <div class="divider">
            <span>ÇiçekSepeti</span>
        </div>
        <div class="breadcrumb">
            <span class="breadcrumb-item">Ciceksepeti Market</span>
            <span class="breadcrumb-item">İstanbul</span>
            <span class="breadcrumb-item">CiceksepetiBreadCrumb</span>
        </div>
    </header>
    <main>
        <FilterMenu />
        <ShopItems />
        <CampaignItems />
    </main>
    <footer>
        <FooterMenu />
    </footer>
</template>
<style lang="less">
@import "./assets/styles/main.less";
html,
body {
    font-family: "Oswald", sans-serif;
    padding: 0;
    margin: 0;
}
input, textarea, button {
    font-family: inherit;
}
.divider {
    font-size: 35px;
    font-weight: 700;
    color: #fff;
    margin: 30px auto 0;
    width: 100vw;
    height: 60px;
    text-align: left;
    background: url("@/assets/images/header-bg.png") no-repeat center;
    span {
        display: inline-block;
        margin: auto 220px;
        font-weight: 300;
        font-size: 30px;
    }
}
.breadcrumb {
    padding: 0 220px;
    margin-top: 10px;
    &-item {
        display: inline-block;
        font-weight: 300;
        font-size: 14px;
        cursor: pointer;
        &:last-child {
            color: #51b549;
        }
        + .breadcrumb-item::before {
            content: ">";
            margin: 0 10px;
            color: #000;
        }
    }
}
@media screen and (max-width: 1024px) {
    .divider {
        text-align: center;
    }
    .divider span {
        margin: auto;
    }
    .breadcrumb {
        padding: 0 20px;
    }
}
</style>
