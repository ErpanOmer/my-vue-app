<style lang="scss">
#app {
    .klarna-dialog {
        display: none;
    }
}

.klarna-dialog {
    background-color: #F7F8FA;
    border-radius: 10px;
    padding: 24px 40px;
    width: 600px;

    &>.u24DemiBold_v2 {
        display: flex;
        align-items: center;
        margin-bottom: 24px;

        img {
            max-width: 67px;
            margin-right: 24px;
        }
    }

    .pay {
        border-radius: 10px;
        background-color: #fff;
        padding: 24px;

        &>.u17Medium_v2 {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 12px 0;
            border-bottom: 1px solid #eee;

            &>div {
                background-color: #FFB3C7;
                border-radius: 16px;
                padding: 5px 30px;
            }
        }

        .total {
            .u17Medium_v2 {
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-top: 12px;
            }

            .u11Medium_v2 {
                margin-top: 6px;
                text-align: right;
                color: #8E8E8E;
            }
        }
    }

    .how {
        margin: 24px 0 12px;
    }

    .my-button {
        width: 100%;
        margin-top: 24px;
    }

    .scroll {
        max-height: calc(85vh - 180px);
        overflow-y: auto;
        border-radius: 10px;

        &>.u17Medium_v2 {
            margin-bottom: 24px;
        }

        &::-webkit-scrollbar {
            width: 12px;
        }

        &::-webkit-scrollbar-track {
            background: transparent;
            border-radius: 10px;
        }

        &::-webkit-scrollbar-thumb {
            background: #bfbfbf;
            border-radius: 10px;
        }

        &::-webkit-scrollbar-corner {
            background: #179a16;
        }

    }

    .works {
        padding: 24px;
        background-color: #fff;
        border-radius: 10px;

        .u17Medium_v2 {
            padding-left: 18px;
            padding-bottom: 40px;
            border-left: 2px solid #FFB3C7;
            position: relative;

            span {
                display: block;
                position: absolute;
                width: 13px;
                height: 13px;
                background-color: #FFB3C7;
                left: 0;
                top: 0;
                transform: translateX(-7.5px);
                border-radius: 50%;
            }

            &:last-child {
                border-color: transparent;
            }
        }
    }

    .close {
        position: absolute;
        right: 40px;
        top: 24px;
        color: #999;
        font-size: 30px;
        font-weight: 100;
        cursor: pointer;
    }
}


@media (max-width: 767px) {
    .klarna-dialog {
        padding: 24px 12px 12px;

        &>.u24DemiBold_v2 {
            font-size: 18px;
            margin-bottom: 12px;

            img {
                max-width: 55px;
                margin-right: 12px;
            }
        }

        .scroll {
            max-height: calc(85vh - 132px);

            &>.u17Medium_v2 {
                font-size: 15px;
                margin-bottom: 12px;
            }

            .pay {
                padding: 12px 6px;

                &>.u20DemiBold_v2,
                &>.u17Medium_v2 {
                    font-size: 15px;
                    padding: 6px 0;
                    margin-bottom: 6px;

                    &>div {
                        padding: 2px 12px;
                    }
                }


                .total {
                    .u17Medium_v2 {
                        margin: 6px 0 0;
                        font-size: 12px;
                    }
                }
            }

            .how {
                font-size: 20px;
                margin: 12px 0 6px;
            }

            .works {
                padding: 12px;

                .u17Medium_v2 {
                    font-size: 14px;
                    padding-bottom: 24px;
                }
            }


            &::-webkit-scrollbar {
                width: 6px;
            }
        }

        .my-button {
            margin-top: 12px;
        }

        .close {
            right: 12px;
            top: 0;
        }
    }
}
</style>

<template>
    <div class="klarna-dialog">
        <div class="u24DemiBold_v2"><img
                src="https://cdn.shopify.com/s/files/1/0633/2068/6808/files/Image_167_2x_a31405e4-22c9-4546-8404-ec68e30f98ad.png?v=1685686187"
                alt=""> About Klarna financing</div>
        <div class="scroll">
            <div class="u17Medium_v2">Choose Klarna as yourpayment option. <br class="mobileHide">Get what you love, choose
                how you pay.</div>
            <div class="pay">
                <div class="u20DemiBold_v2">Pay in 24 months, 0 APR on Carbon 1</div>
                <div class="u17Medium_v2"><span>137,46 €/ month</span>
                    <div>24 payments</div>
                </div>
                <div class="total">
                    <div class="u17Medium_v2" style="color:#8E8E8E">
                        <span>APR</span>
                        <span>Total</span>
                    </div>
                    <div class="u17Medium_v2">
                        <span>0% p.a. (fixed)</span>
                        <span>2.699 €*</span>
                    </div>
                    <div class="u11Medium_v2">*Promotion Price, limited time only</div>
                </div>
            </div>
            <div class="u24DemiBold_v2 how">How it works</div>
            <div class="works">
                <div class="u17Medium_v2">You are now at check out with your selected Carbon 1<span></span></div>
                <div class="u17Medium_v2">Fill in your contact info and shipping address, click Continue to
                    Shipping.<span></span></div>
                <div class="u17Medium_v2">Confirm your contact and Deliver info, click Continue to Payment<span></span>
                </div>
                <div class="u17Medium_v2">Now you can find Klarna as a payment option in the payment section as the image
                    below<span></span><img src="https://cdn.shopify.com/s/files/1/0633/2068/6808/files/20230602-163834.png?v=1685695127" alt=""></div>
                    <div class="u17Medium_v2">Select Klarna and confirm your billing address, click Pay Now<span></span></div>
                    <div class="u17Medium_v2">Now you will be redirected to Klarna payment portal, choose monthly installments as the option that works best for you<span></span></div>
                    <div class="u17Medium_v2">Enjoy your shopping and let automatic payments do the rest<span></span></div>
            </div>
        </div>
        <div class="my-button my-button-black">Continue Check out</div>
        <span class="close">×</span>
    </div>
</template>


<script setup>
import { onMounted } from 'vue';

onMounted(() => {
    // const html = $('#app').html()


    showMiniDialog(`<div class="klarna-dialog">
        <div class="u24DemiBold_v2"><img
                src="https://cdn.shopify.com/s/files/1/0633/2068/6808/files/Image_167_2x_a31405e4-22c9-4546-8404-ec68e30f98ad.png?v=1685686187"
                alt=""> About Klarna financing</div>
        <div class="scroll">
            <div class="u17Medium_v2">Choose Klarna as yourpayment option. <br class="mobileHide">Get what you love, choose
                how you pay.</div>
            <div class="pay">
                <div class="u20DemiBold_v2">Pay in 24 months, 0 APR on Carbon 1</div>
                <div class="u17Medium_v2"><span>137,46 €/ month</span>
                    <div>24 payments</div>
                </div>
                <div class="total">
                    <div class="u17Medium_v2" style="color:#8E8E8E">
                        <span>APR</span>
                        <span>Total</span>
                    </div>
                    <div class="u17Medium_v2">
                        <span>0% p.a. (fixed)</span>
                        <span>2.699 €*</span>
                    </div>
                    <div class="u11Medium_v2">*Promotion Price, limited time only</div>
                </div>
            </div>
            <div class="u24DemiBold_v2 how">How it works</div>
            <div class="works">
                <div class="u17Medium_v2">You are now at check out with your selected Carbon 1<span></span></div>
                <div class="u17Medium_v2">Fill in your contact info and shipping address, click Continue to
                    Shipping.<span></span></div>
                <div class="u17Medium_v2">Confirm your contact and Deliver info, click Continue to Payment<span></span>
                </div>
                <div class="u17Medium_v2">Now you can find Klarna as a payment option in the payment section as the image
                    below<span></span><img src="https://cdn.shopify.com/s/files/1/0633/2068/6808/files/20230602-163834.png?v=1685695127" alt=""></div>
                    <div class="u17Medium_v2">Select Klarna and confirm your billing address, click Pay Now<span></span></div>
                    <div class="u17Medium_v2">Now you will be redirected to Klarna payment portal, choose monthly installments as the option that works best for you<span></span></div>
                    <div class="u17Medium_v2">Enjoy your shopping and let automatic payments do the rest<span></span></div>
            </div>
        </div>
        <div class="my-button my-button-black">Continue Check out</div>
        <span class="close">×</span>
    </div>`)

    setTimeout(() => {
        $('.klarna-dialog .close').on('click', closeMiniDialog)
        $('.klarna-dialog .my-button').on('click', closeMiniDialog)
    }, 100)
})

</script>

