<template>
  <div id="section1">
    <div class="center">
      <div>
        <div class="u17Light">CHORD</div>
        <div class="u42DemiBold">No One Knows <br> It's Electric</div>
      </div>
      <div class="u17Light">
        Meet the new lightweight city ebike 2023 - the perfect smart electric town bike for urban adventurers. With a
        range
        of up to 120km, this ebike is ideal for commuting or leisurely rides around town. With the extra safety and
        convenience that comes with smart features like anti-theft GPS, onboard navigation and automatic synchronization
        of
        ride data, the Chord Ebike is your first step into a new era of cycling.
      </div>
    </div>
  </div>
</template>

<style>
#section1 {
  background-color: #F7F8FA;
  padding: 100px 0;
}

#section1 .center {
  margin: 0 auto;
  max-width: 1280px;
  display: flex;
  align-items: center;

}

#section1 .center > div {
  flex: 1;
}

#section1 .center .u17Light {
  color: #BCBEB9;
  line-height: 24px;
  margin-bottom: 10px;
}

#section1 .center > div:last-child {
  color: #000;
}


@media (max-width: 767px) {
  #section1 {
    padding: 50px 15px;
  }

  #section1 .center {
    flex-direction: column;
    align-items: normal;
  }

  #section1 .center .u17Light {
    font-size: 15px;
  }

  #section1 .center .u42DemiBold {
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 24px;
  }
}
</style>