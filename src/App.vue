<style>
.message-box {
    width: 367px;
    height: auto;
    position: fixed;
    right: -367px;
    transition: all .3s;
    padding: 0 0 25px 25px;
    background-color: #EFF1F8;
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    grid-column-gap: 15px;
    align-items: center;
    border-radius: 10px;
    bottom: 18px;
}

.message-box div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    font-size: 12px;
    line-height: 16.8px;
    padding-right: 18px;
}

.message-box div .u17Medium {
    font-size: 18px;
    line-height: 22.5px;
    font-weight: 600;
    margin-top: 45px;
}

.message-box span {
    position: absolute;
    right: 5px;
    top: -5px;
    font-size: 30px;
    color: #999;
    cursor: pointer;
}

@media (max-width: 767px) {
    .message-box-mobile {
        width: 100%;
        bottom: -180px;
        right: 0 !important;
        align-items: flex-end;
        padding: 25px 30px;
        grid-template-columns: 2fr 1fr;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    }

    .message-box-mobile div {
        padding: 0;
    }

    .message-box-mobile img {
        max-width: 80px;
    }

    .message-box-mobile div .u17Medium {
        margin: 0;
        font-size: 16px;
    }

    .message-box-mobile span {
        top: 5px;
        right: 15px;
    }
}
</style>

<template>
    <div onclick="showLayerSide()">wwww</div>
    <div class="message-box mobileHide">
        <img src="https://cdn.shopify.com/s/files/1/0633/2068/6808/files/jobradorg_2x_9fa9518f-0618-4ba0-8973-8f5a381f940d.png?v=1680154687"
            alt="">
        <div>
            <div class="u17Medium">Save up to 40%</div>
            <div style="margin: 6px 0 24px;">Lease a Urtopia with JobRad and save up to 40%.</div>
            <a class="my-button my-button-black" href="/pages/jobrad">Learn more</a>
        </div>
        <span onclick="hideLayerSide()">×</span>
    </div>
    <div class="message-box message-box-mobile pcHide">
        <div>
            <div class="u17Medium">Save up to 40%</div>
            <div style="margin: 6px 0 12px;">Lease a Urtopia with JobRad and save up to 40%.</div>
            <a class="my-button my-button-black" href="/pages/jobrad">Learn more</a>
        </div>
        <img src="https://cdn.shopify.com/s/files/1/0633/2068/6808/files/jobradorg_2x_9fa9518f-0618-4ba0-8973-8f5a381f940d.png?v=1680154687"
            alt="">
        <span onclick="hideLayerSide()">×</span>
    </div>
</template>