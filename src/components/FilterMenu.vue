<script setup lang="ts">
import categories from '@/datas/categories.json';
import { storeToRefs } from 'pinia';
import { useStore } from '../stores/store';

const store = useStore();
const { category } = storeToRefs(store);

</script>

<template>
    <div class="filter">
        <div class="header">
            <img src="@/assets/images/categories.svg" alt="Kategoriler" />
            <span>Kategoriler</span>
        </div>
        <div class="wrapper">
            <button class="category" :class="{ active: category === 0 }" @click="category = 0">
                Tüm Kategoriler
            </button>
            <button
                v-for="categoryItem in categories"
                :key="categoryItem.id"
                class="category"
                :class="{ active: category === categoryItem.id }"
                @click="category = categoryItem.id"
            >
                {{ categoryItem.title }}
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
            height: 19px;
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
        flex-wrap: wrap;
        .category {
            height: 50px;
            flex-grow: 1;
            flex-shrink: 0;
            flex-basis: 13.28%;
            width: 13.28%;
            font-size: 16px;
            border: 2px solid #edf1f2;
            border-radius: 10px;
            background: #f7f7f7 0% 0% no-repeat;
            padding: 0 20px;
            margin: 0 1% 20px 0;
            cursor: pointer;
            transition: all 0.4s;
            &.active {
                border-color: var(--color-blue);
                background: var(--color-blue) 0% 0% no-repeat;
                color: #fff;
            }
        }
        button {
            width: 150px;
            height: 40px;
            border: 2px solid #edf1f2;
            border-radius: 28px;
            background: #f7f7f7 0% 0% no-repeat;
            padding: 0 20px;
            margin-bottom: 20px;
            flex-basis: 13.28%;
            width: 13.28%;
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
                flex-basis: 49%;
                width: 49%;
            }
        }
    }
}
</style>