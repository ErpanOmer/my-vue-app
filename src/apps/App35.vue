<style lang="scss">
.sale_coupon {
    max-width: 410px;
    height: 46px;
    box-shadow: 10px 10px 10px #6B869A1C;
    background-image: linear-gradient(-90deg, #EE6426, #F4492A);
    margin: 0 auto;
    position: relative;
    border-radius: 5px;
    overflow: hidden;
    color: #fff;
    display: flex;

    & > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        height: 100%;
        line-height: 1.25em;

        &:first-child {
            flex-basis: 75%;
            padding: 0 6%;
            font-size: 13px;
        }

        &:last-child {
            flex-basis: 25%;
            border-left: 2px dashed #fff;
            font-size: 17px;
            font-weight: 600;
            padding: 0 2%;
        }
    }

    &::before,
    &::after {
      content: '';
      position: absolute;
      height: 15px;
      width: 15px;
      top: 50%;
      background-color: #fff;
      border-radius: 50%;
    }

    &::before {
        left: 0;
        transform: translate(-60%, -50%);
    }

    &::after {
        right: 0;
        transform: translate(60%, -50%);
    }
}
</style>

<template>
    <div class="sale_coupon">
        <div class="l">
            Check out with Easter Sale Code to Enjoy:
        </div>
        <div class="r">SPEED600 OK300</div>
    </div>
</template>