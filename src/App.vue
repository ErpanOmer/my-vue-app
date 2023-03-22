<style>
.store-list {
    display: grid !important;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1%;
    /* margin: -20px; */
}

.store-list .list {
    max-height: 593px;
    overflow: auto;
    padding-right: 10%;
}

.store-list .list .item {
    padding: 12px 0;
}

.store-list .list .item + .item {
    border-top: 1px solid #ccc;
}




.store-list .list .u30DemiBold {
    line-height: 50px;
}

.store-list .list ul {
    margin: 6px 0 12px;
    padding: 0;
    padding-left: 20px;
}

.store-list .list .u20Medium {
    margin-bottom: 6px;
    font-size: 17px;
    color: #555;
}

.store-list .list .address {
    padding-top: 6px;
    height: 60px;
}

.store-list .list ul>li::marker {
    color: #FD4B17;
}

.store-list .list .my-button {
    background-color: #FD4B17;
    padding: 10px 40px;
}


@media (max-width: 767px) {
    .store-list {
        margin: -20px 0 auto;
        /* grid-template-columns: 1fr; */
        /* grid-template-rows: 1fr 3fr; */
        display: flex !important;
        flex-direction: column;
    }

	.store-list .list {
        order: 1;
        padding: 0;
        flex: 1;
   }

   .store-list .list .u30DemiBold {
        font-size: 24px;
        line-height: 30px;
        margin-bottom: 12px;
   }

   .store-list .list .u20DemiBold,
   .store-list .list .u20Medium {
        font-size: 16px;
        line-height: 20px;
   }

   .store-list .list .my-button {
        width: 100%;
        text-align: center;
   }

   .store-list .list .address {
     height: auto;
   }

   .store-list .list ul {
      margin-bottom: 0;
   }
  }
</style>


<style>
  #storepoint-tag-dropdown,
  #storepoint-search,
  #storepoint-panel {
	 display:none!important;
  }
  
  #storepoint-map,
  #storepoint-container {
	width: 100% !important;
    height: 593px !important;
  }

  /* #storepoint-container .mapboxgl-ctrl-top-right {
        display: none;
  } */
  
  @media (max-width: 767px) {
	#storepoint-container,
    #storepoint-map {
        max-height: 30vh !important;
	  /* min-height: calc(100vw - 30px); */
    }
  }

  /* @media (min-width: 768px) {
    #storepoint-container {
        pointer-events: none;
    }

    #storepoint-container .stpt-marker {
        pointer-events: all;
    }    
  } */
</style>

<template>
    <!-- <div class="hide">
        <div class="store-list">
            <div class="list">
                <div class="item">
                    <div class="u30DemiBold">ELV Bikes</div>
                    <div class="u20DemiBold">Available Model:</div>
                    <ul>
                        <li class="u20Medium">Carbon One Size M/L</li>
                        <li class="u20Medium">Chord</li>
                    </ul>
                    <div class="u20DemiBold">ADD:</div>
                    <div class="u20Medium address">425 S. Broadway, Los Angeles, CA 90013</div>
                    <div class="my-button my-button-black">Select</div>
                </div>
                <div class="item">
                    <div class="u30DemiBold">ELV Bikes</div>
                    <div class="u20DemiBold">Available Model:</div>
                    <ul>
                        <li class="u20Medium">Carbon One Size M/L</li>
                        <li class="u20Medium">Chord</li>
                    </ul>
                    <div class="u20DemiBold">ADD:</div>
                    <div class="u20Medium address">425 S. Broadway, Los Angeles, CA 90013</div>
                    <div class="my-button my-button-black">Select</div>
                </div>
            </div>
            <div id="storepoint-container" data-tags="de,Test Ride,Münster" data-map-id="162f21804990ff"></div>
        </div>
    </div> -->
</template>

<script setup>
import { onMounted } from 'vue';


</script>