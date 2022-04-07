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
<style>
@import "./assets/styles/main.less";
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap");
html,
body,
input {
    font-family: "Oswald", sans-serif;
    padding: 0;
    margin: 0;
}
.divider {
    font-size: 35px;
    font-weight: 700;
    color: #fff;
    margin: 30px auto 0;
    width: 100%;
    height: 60px;
    text-align: left;
    background: url("@/assets/images/header-bg.png") no-repeat center;
}
.divider span {
    display: inline-block;
    margin: auto 220px;
    font-weight: 300;
}
@media screen and (max-width: 480px) {
    .divider {
        text-align: center;
    }
    .divider span {
        margin: auto;
    }
}
</style>
