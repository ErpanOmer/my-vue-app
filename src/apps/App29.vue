<style>
.mini-dialog {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
    background-color: #000000b3;
    justify-content: center;
    align-items: center;
    z-index: 100000000;
    overflow: hidden;
    padding: 0 8vw;
    display: none;
    user-select: none;
}

.mini-dialog > div {
    position: relative;
    z-index: 100000001;
    max-height: 85vh;
    overflow: hidden;
}

.subscribe-container {
    display: grid;
    max-width: 976px;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    border-radius: 15px;
    background-color: #fff;
}

.subscribe-container .subscribe {
    display: flex;
    flex-direction: column;
    padding: 12%;
    justify-content: center;
}

.subscribe-container .subscribe img {
    margin: 30px 0;
    max-width: 265px;
}

.subscribe-container .subscribe .u17Light {
    line-height: 24px;
    margin-bottom: 86px;
}

.subscribe-container .subscribe .email {
    box-sizing: border-box;
    display: flex;
    height: 47px;
    position: relative;
}

.subscribe-container .subscribe .email input {
    height: 100%;
    width: 100%;
    border: 1.5px solid #0000004D;
    border-radius: 30px;
    color: #000;
    padding: 0 25px;
    font-size: 14px;
    position: relative;
    z-index: 1;
    overflow: hidden;
    box-sizing: border-box;
}

.subscribe-container .subscribe .email .my-button {
    position: absolute;
    right: 0;
    z-index: 2;
    height: 100%;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}

.subscribe-container .subscribe .email input::placeholder {
    color: #aaa;
}

.subscribe-container .close {
    position: absolute;
    top: 5px;
    right: 20px;
    font-size: 40px;
    color: #999;
    cursor: pointer;
    font-weight: 300;
}

@media (max-width: 767px) {
    .subscribe-container {
        grid-template-columns: 1fr;
    }

    .subscribe-container .subscribe {
        padding: 8%;
    }

    .subscribe-container .subscribe .u20Medium {
        font-size: 18px;
        line-height: 21px;
    }

    .subscribe-container .subscribe img {
        margin: 15px 0;
        max-width: 205px;
    }

    .subscribe-container .subscribe .u17Light {
        font-size: 15px;
        line-height: 21px;
        margin-bottom: 40px;
    }

    .subscribe-container .subscribe .email {
        height: 40px;   
    }

    .subscribe-container .subscribe .email input {
        font-size: 12px;
        padding: 0 15px;
    }

    .subscribe-container .close {
        top: -5px;
        right: 10px;
        color: #fff;
    }
}
</style>

<template>
    <!-- <div class="mini-dialog">
        <div class="container">
            <img class="mobileHide" src="https://cdn.shopify.com/s/files/1/0633/2068/6808/files/Urtopia_Photo_Sesh_9_of_14.jpg?v=1680242058" alt="">
            <img class="pcHide" src="https://cdn.shopify.com/s/files/1/0633/2068/6808/files/Urtopia_Photo_Sesh_9_of_14_2x_57b3bdef-c4dc-4f7a-a72e-8fbb41b596b9.jpg?v=1680245456" alt="">
            <div class="subscribe">
                <span class="u20Medium">Huge Easter Sale</span>
                <span class="u17Light">Subscribe for Easter exclusive coupon and Utopia stories</span>
                <div class="email">
                    <input placeholder="Enter email here" type="email">
                    <div class="my-button my-button-black">Subscribe</div>
                </div>
            </div>
            <span class="close" onclick="closeMiniDialog()">×</span>
        </div>
    </div> -->
</template>