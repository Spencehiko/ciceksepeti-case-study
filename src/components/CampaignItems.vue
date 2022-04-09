<template>
    <div class="campaign">
        <div class="campaign-item item-1">
            <div class="image">
                <img
                    src="@/assets/images/motor.png"
                    alt="75 TL Üzerine Teslimat Ücreti Bizden"
                />
            </div>
            <div class="content">
                <h2 class="campaign-title">
                    75 TL Üzerine Teslimat Ücreti Bizden
                </h2>
                <button type="button">Detaylı Bilgi</button>
            </div>
        </div>
        <div class="campaign-item item-2">
            <div class="image">
                <img
                    src="@/assets/images/gift.png"
                    alt="Hediye Kategorisi için Sepette %15 İndirim"
                />
            </div>
            <div class="content">
                <h2 class="campaign-title">
                    Hediye Kategorisi için Sepette %15 İndirim
                </h2>
                <button type="button">Hediye Ürünleri</button>
            </div>
        </div>
        <div class="campaign-item item-3">
            <div class="image">
                <img
                    src="@/assets/images/stationary.png"
                    alt="Kırtasiye Kategorisi için Sepette %15 İndirim"
                />
            </div>
            <div class="content">
                <h2 class="campaign-title">
                    Kırtasiye Kategorisi için Sepette %15 İndirim
                </h2>
                <button type="button">Detaylı Bilgi</button>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
.campaign {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-top: 30px;
    flex-grow: 0;
    flex-shrink: 0;
    gap: 20px;
    border-top: 2px solid #edf1f2;
    &-item {
        flex-basis: calc(32% - 20px);
        display: flex;
        border-radius: 10px;
        padding: 10px;
        .image {
            img {
                width: 100%;
                height: 100%;
            }
        }
        .content {
            margin-left: 35px;
            .campaign-title {
                font-size: 24px;
                font-weight: 300;
                color: #707070;
            }
            button {
                background: #fff;
                color: #e64e41;
                border: none;
                padding: 0.5rem 1rem;
                border-radius: 15px;
                cursor: pointer;
                font-size: 15px;
                font-weight: 600;
            }
        }
        &.item-1 {
            background: #ffeae8 0% 0% no-repeat padding-box;
        }
        &.item-2 {
            background: #e8f1ff 0% 0% no-repeat padding-box;
        }
        &.item-3 {
            background: #e2f7e1 0% 0% no-repeat padding-box;
        }
    }
}
@media screen and (max-width: 1440px) {
    .campaign {
        &-item {
            flex-basis: calc(50% - 40px);
        }
        .content {
            .campaign-title {
                height: 8rem;
            }
            button{
                margin: 10px 0;
            }
        }
    }
}
@media screen and (max-width: 1024px) {
    .campaign {
        padding: 0 20px;
        &-item {
            flex-basis: calc(100% - 20px);
        }
        .content {
            .campaign-title {
                height: calc(auto - 20px);
            }
        }
    }
}
</style>