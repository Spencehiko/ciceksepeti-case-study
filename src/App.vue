<script setup lang="ts">
import HeaderMenu from "./components/HeaderMenu.vue";
import FilterMenu from "./components/FilterMenu.vue";
import ShopItems from "./components/ShopItems.vue";
import CampaignItems from "./components/CampaignItems.vue";
import FooterMenu from "./components/FooterMenu.vue";
</script>

<template>
    <header>
        <HeaderMenu class="component" />
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
        <FilterMenu class="component" />
        <ShopItems class="component" />
        <CampaignItems class="component" />
    </main>
    <footer>
        <FooterMenu class="component" />
        <span class="copyright"
            >Copyright © 2022 Çiçek Sepeti İnternet Hizmetleri A.Ş</span
        >
    </footer>
</template>
<style lang="less">
@import "./assets/styles/main.less";
* {
  max-width: 100%;
}
html,
body {
    font-family: "Source Sans Pro", sans-serif;
    padding: 0;
    margin: 0;
}
input,
textarea,
button {
    font-family: inherit;
}
.vertical-middle {
    margin: auto 0;
}
.component {
    margin-top: 20px;
    padding: 0 220px;
}
.divider {
    font-size: 40px;
    font-weight: 700;
    color: var(--color-white);
    margin: 30px auto 0;
    width: 100%;
    height: 60px;
    text-align: left;
    background: url("@/assets/images/header-bg.png");
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
            color: var(--color-green);
        }
        + .breadcrumb-item::before {
            content: ">";
            margin: 0 10px;
            color: var(--color-black);
        }
    }
}
.copyright {
    display: inline-block;
    width: 100%;
    background: var(--color-red-soft);
    text-align: center;
    font-size: 13px;
    padding: 20px 0;
}
@media screen and (max-width: 1024px) {
    .component {
        padding: 0 20px;
    }
    .divider {
        margin-top: 100px;
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
