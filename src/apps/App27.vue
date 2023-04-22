<style>
#section3 {
    max-width: 1280px;
    margin: 0 auto;
}

#section3 .u42DemiBold {
    margin-bottom: 80px;
    text-align: center;
}

#section3 .boxs {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

#section3 .boxs .texts {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    text-align: left;
    background-color: #fff;
}


#section3 .boxs .texts img {
    max-width: 130px;
    margin-bottom: 24px;
}


#section3 .boxs .texts .text {
    max-width: 400px;
}

#section3 .boxs .texts .text .u17Light {
    margin: 30px 0 10px 0;
    line-height: 24PX;
}

#section3 .boxs .texts .u20DemiBold {
    text-decoration: underline;
}


@media (max-width: 767px) {
    #section3 .boxs {
        display: flex;
        flex-direction: column;
    }

    #section3 .u42DemiBold {
        margin-bottom: 10%;
        text-align: left;
        font-size: 24px;
    }

    #section3 .boxs .texts {
        padding: 10% 15px;
    }

    #section3 .boxs .texts .text+.text {
        margin-top: 15%;
    }

    #section3 .boxs .texts .u30DemiBold {
        font-size: 24px;
    }

    #section3 .boxs .texts .text .u17Light {
        font-size: 15px;
        margin-top: 15px;
    }

    #section3 .boxs .texts .u20DemiBold {
        font-size: 14px;
    }

    #section3 .boxs>*:nth-child(1) {
        order: 2;
    }

    #section3 .boxs>*:nth-child(2) {
        order: 1;
    }

    #section3 .boxs>*:nth-child(3) {
        order: 3;
    }

    #section3 .boxs>*:nth-child(4) {
        order: 4;
    }

    #section3 .boxs>*:nth-child(5) {
        order: 6;
    }

    #section3 .boxs>*:nth-child(6) {
        order: 5;
    }
}
</style>

<template>
    <div id="section3">
        <div class="u42DemiBold">Urtopia CARE</div>
        <div class="boxs">
            <div class="texts">
                <div class="text">
                    <div class="u30DemiBold">14-Day Free Return</div>
                    <div class="u17Light"> Free return of unused products within 14 days of delivery.</div>
                    <a class="u20DemiBold" href="/pages/shipping-and-return">Learn more</a>
                </div>
                <div class="text">
                    <div class="u30DemiBold">2-Year Warranty</div>
                    <div class="u17Light"> All Urtopia bikes are covered under our 2-year Limited Warranty for the owner
                        against all manufacturing defects.</div>
                    <a class="u20DemiBold" href="/pages/warranty">Learn more</a>
                </div>
            </div>
            <img src="https://cdn.shopify.com/s/files/1/0633/2068/6808/files/20230213-untitled-5440.jpg?v=1678012461">
            <img src="https://cdn.shopify.com/s/files/1/0633/2068/6808/files/DSCF1606.jpg?v=1678012512" alt="">
            <div class="texts">
                <div class="text">
                    <div class="u30DemiBold">After Service, Worldwide</div>
                    <div class="u17Light">Urtopia is dedicated to deploying authorised service providers throughout the
                        country for satisfactory service and maintenance.</div>
                    <a class="u20DemiBold" href="/pages/find-a-dealer">Learn more</a>
                </div>
            </div>
            <div class="texts">
                
                <div class="text">
                    <img src="https://cdn.shopify.com/s/files/1/0633/2068/6808/files/jobradorg_2x_9fa9518f-0618-4ba0-8973-8f5a381f940d.png?v=1680154687"/>
                    <div class="u30DemiBold">Lease an Urtopia</div>
                    <div class="u17Light">Lease with JobRad for a tax-deductible purchase and save up to 40%</div>
                    <a class="u20DemiBold" href="/pages/jobrad">Learn more</a>
                </div>
            </div>
            <img src="https://cdn.shopify.com/s/files/1/0633/2068/6808/files/6T1A8524.jpg?v=1680148505" alt="">
        </div>
    </div>
</template>