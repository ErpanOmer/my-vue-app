<script setup>

</script>

<template>
  <div id="section1">
    <div class="texts">
      <div>“It's incredibly fun to ride”</div>
      <div></div>
    </div>
    <div class="logos">
      <img active src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/20230228-165148.png?v=1677574346" onclick="moveTop(`“It's incredibly fun to ride”`, this)"/>
      <img src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/20230228-165209.png?v=1677574346" onclick="moveTop('“Like a phone’s than a next-gen fixie”', this)"/>
      <img src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/Mask_Group_18075_2x_5ed82c19-16b6-4f05-870a-623b5429a75f.png?v=1677303615" onclick="moveTop(`“One of the smartest ebike”`, this)"/>
      <img src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/20230228-165154.png?v=1677574346" onclick="moveTop('“Best Electric Bike for 2022”', this)"/>
      <img src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/20230228-165159.png?v=1677574346" onclick="moveTop('“Does phone tech better than some phones”', this)"/>
    </div>
  </div>
</template>

<style>
@keyframes toTop {
    0% {
      opacity: 0;
      transform: translateY(0px);
    }

    /* 50% {
      opacity: 0.5;
      transform: translateY(-20px);
    } */

    100% {
      transform: translateY(-40px);
      opacity: 1;
    }
}

@keyframes toBottom {
    0% {
      opacity: 1;
      transform: translateY(0px);
    }

    /* 50% {
      opacity: 0.5;
      transform: translateY(20px);
    } */

    100% {
      transform: translateY(40px);
      opacity: 0;
    }
}

#section1 .texts div {
  animation-duration: 0.5s;
  animation-timing-function: ease-out;
}

#section1 .texts .toTop {
  opacity: 1;
  animation-name: toTop;
  transform: translateY(-40px);
}

#section1 .texts .toBottom {
  opacity: 0;
  animation-name: toBottom;
  transform: translateY(40px);
}


#section1 {
  display: flex;
  height: 340px;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 75px 0;
  box-sizing: border-box;
}

#section1 .texts {
  flex: 1;
  font: normal normal bold 30px/40px Urbane;
}

#section1 .logos img {
  height: 60px;
  width: auto;
  margin: 0 39px;
  opacity: 0.5;
}

#section1 .logos img[active] {
  opacity: 1;
}



</style>
