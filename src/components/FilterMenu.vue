<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useStore } from '../stores/store';

const store = useStore();
const { categories } = store;
const { categoryId } = storeToRefs(store);

</script>

<template>
    <div class="filter">
        <div class="header">
            <img src="@/assets/images/categories.svg" alt="Kategoriler" />
            <span>Kategoriler</span>
        </div>
        <div class="wrapper">
            <button
                class="category"
                :class="{ active: categoryId === 0 }"
                @click="categoryId = 0"
            >
                Tüm Kategoriler
            </button>
            <button
                v-for="categoryItem in categories"
                :key="categoryItem.id"
                class="category"
                :class="{ active: categoryId === categoryItem.id }"
                @click="categoryId = categoryItem.id"
            >
                {{ categoryItem.title }}
            </button>
        </div>
    </div>
</template>
<style lang="less" scoped>
.filter {
    .header {
        margin-bottom: 10px;
        img {
            width: 20px;
            height: 19px;
        }
        span {
            font-size: 24px;
            font-weight: 400;
            color: var(--color-blue);
            margin-left: 5px;
        }
    }
    .wrapper {
        display: flex;
        flex-wrap: wrap;
        gap: 20px 1%;
        .category {
            height: 50px;
            flex-grow: 0;
            flex-basis: 13.28%;
            width: 13.28%;
            font-size: 16px;
            background: #fff 0% 0% no-repeat;
            border: 2px solid #edf1f2;
            border-radius: 10px;
            padding: 0 20px;
            cursor: pointer;
            text-align: center;
            transition: all 0.4s;
            &:hover {
                background: #e2e7e9;
                color: var(--color-blue);
            }
            &.active {
                border-color: var(--color-blue);
                background: var(--color-blue) 0% 0% no-repeat;
                color: #fff;
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
            }
        }
    }
}
</style>