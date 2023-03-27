<template>
    <div class="carbon_code">
        <span>€300 OFF with Easter Sale Code</span>
        <span class="bold">OK300</span>
    </div>
</template>


<style>
.carbon_code {
    max-width: 410px;
    background: url(https://cdn.shopify.com/s/files/1/0633/2068/6808/files/20230324-171240.png?v=1679649232) no-repeat;
    height: 46px;
    background-size: 100% 46px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    padding: 0 40px 0 15px;
    font-size: 14px;
    font-weight: 500;
    box-shadow: 10px 10px 10px #6B869A1C;
    margin-top: 20px;
}

.carbon_code .bold {
    font-size: 17px;
    font-weight: bold;
}


@media (max-width: 767px) {
    .carbon_code {
        padding: 0 10% 0 4%;
        font-size: 13px;
    }

    .carbon_code .bold {
        font-size: 16px;
    }
}
</style>