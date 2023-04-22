<style>
#section4 {
    max-width: 1280px;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 600px 600px 600px;
    justify-content: center;
    background-color: #fff;
}

#section4>div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 14% 0 19%;
}

#section4 > div:nth-child(2) img {
    max-width: 135px;
    margin-bottom: 25px;
}

#section4>div:first-child {
    background: url('https://cdn.shopify.com/s/files/1/0633/2068/6808/files/6T1A8524.jpg?v=1680148505') center center/cover no-repeat;
    /* background-color: #161A22;
    background-size: 75%; */
}

#section4>div:nth-child(5) {
    background: url(https://cdn.shopify.com/s/files/1/0583/5810/4213/files/Mask_Group_18294_2x_849210ff-f5fe-4be8-a248-3afbe6674080.png?v=1677557363) bottom center/cover no-repeat;
    background-color: #161A22;
    background-size: 75%;
}

#section4>div:nth-child(4) {
    background: url(https://cdn.shopify.com/s/files/1/0633/2068/6808/files/20230306-114106.jpg?v=1678074104) bottom center/cover no-repeat;
    background-color: #161A22;
}

#section4>div:last-child .images {
    display: flex;
}

#section4>div:last-child .images a {
    display: block;
    /* max-width: 150px; */
    margin-right: 16px;
    cursor: pointer;
}

#section4 h1 {
    margin: 0;
}

#section4 .u20Medium {
    margin: 20px 0 40px;
    font-weight: 300;
    font-size: 17px;
}

@media (max-width: 767px) {
    #section4 {
        grid-template-columns: 1fr;
        padding: 0;
        grid-template-rows: 100vw 90vw 100vw 80vw 100vw 80vw;
    }

    #section4>div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 15px;
    }

    #section4 h1 {
        font-size: 24px;
        font-weight: bold;
    }

    #section4 .u20Medium {
        font-size: 15px;
        margin: 10px 0 20px;
    }

    #section4 > div:nth-child(4) {
        order: 1;
    }

    #section4 > div:nth-child(3) {
        order: 2;
    }

    #section4 > div:nth-child(5) {
        order: 3;
    }

    #section4 > div:nth-child(6) {
        order: 4;
    }

}
</style>

<template>
    <div id="section4">
        <div></div>
        <div>
            <img src="https://cdn.shopify.com/s/files/1/0633/2068/6808/files/jobradorg_2x_9fa9518f-0618-4ba0-8973-8f5a381f940d.png?v=1680154687" alt="">
            <h1>Lease an Urtopia</h1>
            <div class="u20Medium">Lease with JobRad for a tax-deductible purchase and save up to 40%</div>
            <div>
                <a class="my-button my-button-black" href="/pages/jobrad">Learn more</a>
            </div>
        </div>
        <div>
            <h1>Peace of Mind</h1>
            <div class="u20Medium">Enjoy complete peace of mind with our 2-year warranty and 24/7 support, plus full after-sales service.
            </div>
            <div>
                <a class="my-button my-button-black" href="/pages/care">Learn more</a>
            </div>
        </div>
        <div></div>
        <div></div>
        <div>
            <h1>Smart App</h1>
            <div class="u20Medium">Connect, track, share, achieve - Urtopia app: Your perfect cycling companion!</div>
            <div class="images">
                <a target="_blank" href="https://apps.apple.com/de/app/urtopia/id1592975789"><img src="https://cdn.shopify.com/s/files/1/0633/2068/6808/files/321.jpg?v=1680155095" alt=""></a>
                <a target="_blank" href="https://play.google.com/store/apps/details?id=com.newurtopia"><img src="https://cdn.shopify.com/s/files/1/0633/2068/6808/files/get-it-on-google-play-badge-1.jpg?v=1680154868" alt=""></a>
            </div>
        </div>
    </div>
</template>