<style>
.maksim {
    margin: 120px 0;
}

.maksim .centeral-content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}

.maksim .centeral-content > div {
    width: 100%;
    background-color: #F7F8FA;
}

.maksim .left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left: 64px;
}

.maksim .left .u17Light_v2 {
    margin: 15px 0 75px;
}

.maksim .right {
    background-image: url('https://cdn.shopify.com/s/files/1/0633/2068/6808/files/20230418-140144.jpg?v=1681797714');
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 695px;
}

@media (max-width: 767px) {
    .maksim {
        margin: 60px 0;
    }

    .maksim .centeral-content {
        padding: 0;
        grid-template-columns: 1fr;
    }

    .maksim .right {
        max-width: 100vw;
        height: 80vw;
        flex: auto;
    }

    .maksim .left {
        margin: 0;
        padding: 10% 4%;
        box-sizing: border-box;
        order: 1;
    }

    .maksim .left .u42DemiBold_v2 {
        font-size: 24px;
    }

    .maksim .left .u17Light_v2 {
        margin: 5vw 0 10vw;
        font-size: 15px;
    }

    .maksim .left .my-button {
        margin: 0 auto;
    }
}
</style>

<template>
    <div class="maksim">
        <div class="centeral-content">
            <div class="left">
                <div class="u42DemiBold_v2">Chord X Maksim</div>
                <div class="u17Light_v2">A passionate prodigy, and one of the world’s <br> fastest pianists. Mr. Mrvica
                    inspired the design <br> the
                    philosophy of Chord, a crossover between <br> art and tech.</div>
                <a href="https://youtu.be/gjYMDVGv_C4" target="_blank" class="my-button my-button-black">Watch video</a>
            </div>
            <div class="right"></div>
        </div>
    </div>
</template>