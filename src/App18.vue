<style>
.shop-detail {}

.shop-detail .u30DemiBold {
    line-height: 36px;
    margin-bottom: 12px;
}

.shop-detail .u20Medium {
    margin-bottom: 6px;
    font-size: 17px;
    color: #555;
}

.shop-detail ul {
    margin: 6px 0 12px;
    padding: 0;
    padding-left: 20px;
}

.shop-detail  ul>li::marker {
    color: #FD4B17;
}

.shop-detail .item {
    display: flex;
    margin-bottom: 6px;
}


.shop-detail label {
    display: inline-block;
    min-width: 66px;
    font-size: 17px;
}


@media (max-width: 767px) {

    .shop-detail .u30DemiBold {
        font-size: 24px;
        line-height: 30px;
        margin-bottom: 12px;
   }

   .shop-detail .u20DemiBold,
   .shop-detail .u20Medium {
        font-size: 16px;
        line-height: 20px;
   }

}
</style>

<template>
    <div class="shop-detail">
        <div class="u30DemiBold">ELV Bikes</div>
        <div class="u20DemiBold">Available Model:</div>
        <ul>
            <li class="u20Medium">Carbon One Size M/L</li>
        </ul>
        <div class="item">
            <label class="u20DemiBold">ADD:</label>
            <span class="u20Medium">425 S. Broadway, Los Angeles, CA 90013</span>
        </div>
        <div class="item">
            <label class="u20DemiBold">Email:</label>
            <span class="u20Medium">425 S. Broadway, Los Angeles, CA 90013</span>
        </div>
        <div class="item">
            <label class="u20DemiBold">Phone:</label>
            <span class="u20Medium">425 S. Broadway, Los Angeles, CA 90013</span>
        </div>
    </div>
</template>