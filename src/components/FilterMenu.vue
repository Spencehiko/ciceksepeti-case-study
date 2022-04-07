<script setup lang="ts">
import categories from '@/datas/categories.json';
</script>

<template>
    <div class="filter">
        <div class="header">
            <img src="@/assets/images/categories.svg" alt="Kategoriler" />
            <span>Kategoriler</span>
        </div>
        <div class="wrapper">
            <button class="category">Tüm Kategoriler</button>
            <button v-for="category in categories" :key="category.id" class="category">
                {{ category.title }}
            </button>
        </div>
    </div>
</template>
<style lang="less" scoped>
.filter {
    margin-top: 20px;
    padding: 0 220px;
    .header {
        margin-bottom: 20px;
        img {
            width: 20px;
            height: 20px;
            margin-top: 2px;
        }
        & span {
            font-size: 24px;
            font-weight: 400;
            color: var(--color-blue);
            margin-left: 5px;
        }
    }
    .wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        .category {
            height: 50px;
            width: 200px;
            font-size: 18px;
            border: 2px solid #edf1f2;
            border-radius: 28px;
            background: #f7f7f7 0% 0% no-repeat;
            padding: 0 20px;
            margin-bottom: 20px;
            &:hover {
                background: #fff;
                color: var(--color-blue);
            }
        }
        button {
            width: 200px;
            height: 40px;
            border: 2px solid #edf1f2;
            border-radius: 28px;
            background: #f7f7f7 0% 0% no-repeat;
            padding: 0 20px;
            margin-bottom: 20px;
            &:hover {
                background: #fff;
                color: var(--color-blue);
            }
        }
    }
}
@media screen and (max-width: 1024px) {
    .filter {
        padding: 0 20px;
        .wrapper {
            .category {
                margin: 10px auto;
            }
        }
    }
}
</style>