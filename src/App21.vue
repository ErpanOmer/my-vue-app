<template>
    <div class="eggs">
        <div class="background">Easter Sale | $300 OFF + 3 Freebies</div>
        <div class="components">
            <div class="item">
                <img src="https://cdn.shopify.com/s/files/1/0633/2068/6808/files/Mask_Group_18445.jpg?v=1679565530" alt="">
                <span>Water Bottle <br>Cage</span>
            </div>
            <div class="item">
                <img src="https://cdn.shopify.com/s/files/1/0633/2068/6808/files/Mask_Group_18444.jpg?v=1679565970" alt="">
                <span>Micro <br>Fender</span>
            </div>
            <div class="item">
                <img src="https://cdn.shopify.com/s/files/1/0633/2068/6808/files/Image_140.jpg?v=1679566024" alt="">
                <span>Kickstand</span>
            </div>
            <div class="item" style="max-width: 87px;">
                <div>FREE</div>
                <span class="price">€173</span>
            </div>
        </div>
    </div>
</template>

<style>
.eggs {
    max-width: 450px;
    margin-bottom: 30px;
}

.eggs .background {
    background: url('https://cdn.shopify.com/s/files/1/0633/2068/6808/files/20230324-153307.png?v=1679643205') no-repeat;
    background-size: 100% 49px;
    height: 49px;
    line-height: 49px;
    font-size: 14px;
    color: #fff;
    padding: 0 14px;
    font-weight: 600;
}

.eggs .components {
    background-color: #fff;
    padding: 14px;
    border-radius: 10px;
    display: flex;
    flex: 1;
    box-shadow: 0px 3px 20px #00000015;
}

.eggs .components .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #000;
    text-align: center;
    flex: 1;
}

.eggs .components .item img {
    max-width: 72px;
}

.eggs .components .item span {
    font-size: 14px;
    line-height: 18px;
    font-weight: 500;
    display: flex;
    height: 100%;
    align-items: flex-end;
}

.eggs .components .item .price {
    text-decoration: line-through;
    align-items: flex-start;
 }

.eggs .components .item>div {
    background-image: linear-gradient(to bottom, #2E26EE, #2A60F4);
    border-radius: 20px;
    color: #fff;
    padding: 8px 20px;
    margin-bottom: 12px;
    line-height: 22px;
}

@media (max-width: 767px) {
    .eggs .background {
        font-size: 11px;
        padding: 0 12px;
    }

    .eggs .components {
        padding: 6px;
    }

    .eggs .components .item img {
        max-width: 45px;
    }

    .eggs .components .item span {
        font-size: 11px;
        line-height: 13px;
    }

    .eggs .components .item > div {
        padding: 4px 14px;
        font-size: 12px;
    }
}
</style>