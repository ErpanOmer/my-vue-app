<script setup>
import { onMounted } from 'vue';

onMounted(() => {
    const layer = document.querySelector(".order-modal-three");
      const laybox = document.querySelector(".order-modal-layer-three");
      layer.style.display = "flex";
      laybox.className += " dialog-open";

    //   console.log(layer);
})
</script>


<template>
   <div class="order-modal-layer order-modal-three">
      <div class="order-layer-box order-modal-layer-three">
        <div class="order-layer-header order-flex-row">
          <h3>Urtopia Caring</h3>
          <span onclick="onCloseOrderLayer()">&#x2715;</span>
        </div>
        <div
          class="order-layer-body tec-spac"
          style="height: 500px; overflow-y: auto"
        >
          <h3 class="tec-spac-t">Customer-Centric</h3>
          <div class="tec-spac-b order-flex-row">
            <div class="tec-spac-item order-flex-row">
              <h4>2-Year Warranty</h4>
              <p>
                All Urtopia bikes are covered under our 2-year Limited Warranty for the owner against all manufacturing defects.
              </p>
              <div class="opacity">
                <p>Easy to Claim Process</p>
                <p>Contact care@newurtopia.com for warranty claims</p>
              </div>
            </div>
            <div class="tec-spac-item order-flex-row">
              <h4>14-Day Free Return</h4>
              <p style="height: 51px;">Free return of unused products within 14 days of delivery.</p>
              <div class="opacity">
                <p>Favorable Shipping Fees</p>
                <p>Free shipping for defective-on-arrivals, and lower fees for returns/replacements.</p>
              </div>
            </div>
          </div>

          <h3 class="tec-spac-t">Authorised Service Providers</h3>
          <div class="tec-spac-item2 order-flex-row">
            <div>
                <p>
                We have over 20 authorized repair shops across major cities in USA to provide reliable after-sales service for our e-bikes. Our repair partners are experts in their field and have been carefully selected and trained to provide you with quality products and services. <br><br>Simply visit one of our authorized repair shops for repairs or maintenance. We’re committed to ensuring that you have a positive experience with our e-bikes.
                </p>
                <p>
                    <a class="my-button my-button-black" href="/pages/find-a-dealer">Find stores</a>
                </p>
            </div>
            <img src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/Group_20690.jpg?v=1678173146"/>
           
          </div>

          <h3 class="tec-spac-t">Urtopia Care</h3>
          <div class="tec-spac-b order-flex-row">
            <div class="tec-spac-item order-flex-row">
              <h4>Tutorials & FAQs</h4>
              <p>
                Our comprehensive online resources include detailed instruction, troubleshooting videos with step-by-step teaching, and FAQ to address your concerns.
              </p>
            </div>
            <div class="tec-spac-item order-flex-row">
              <h4>Help with my bike</h4>
              <p>
                Something not right with your bike? We’ll guide you step by step to resolve the issue.
              </p>
            </div>
            <div class="tec-spac-item order-flex-row">
              <h4>Talk to Us</h4>
              <p>
                Our expert service representatives can effectively identify and solve uncommon issues to ensure your satisfaction.
              </p>
            </div>
            <div class="tec-spac-item order-flex-row">
              <h4>Video Calls</h4>
              <p>
                Connect with our friendly technical team in real-time via Zoom for patient, expert guidance on any issue.
              </p>
            </div>
            <a class="my-button my-button-black" href="/pages/care">Support info</a>
          </div>
        </div>
      </div>
    </div>
</template>

<style>
      .order-flex-row {
        display: flex;
        align-items: center;
      }
      .order-modal-layer {
        position: fixed;
        z-index: 999;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        display: none;
      }
      .order-modal-layer .order-layer-box {
        opacity: 0;
        background-color: #fff;
        border-radius: 15px;
        width: 900px;
        box-shadow: 0 0 10px 10px rgb(0, 0, 0, 0.08);
      }
      .order-modal-layer .order-layer-header {
        padding: 12px 20px;
        justify-content: space-between;
        border-bottom: 1px solid #eee;
      }
      .order-modal-layer .order-layer-header h3 {
        font: normal normal 600 16px/19px urbane;
        margin: 0;
        margin-left: 20px;
      }
      .order-modal-layer .order-layer-header span {
        font-size: 24px;
        background-color: transparent;
        outline: none;
        border: none;
        cursor: pointer;
        color: #cfcfcf;
      }
      .order-modal-layer .sizefit-switch {
        background-color: #eff0f4;
        border-radius: 50px;
        width: 40%;
        margin: 40px auto;
        overflow: hidden;
      }
      .sizefit-switch .switch-radio {
        position: relative;
        width: 100%;
        overflow: hidden;
      }
      .order-modal-layer .sizefit-switch button {
        padding: 6px 20px;
        margin: 0;
        font: normal normal 600 16px/33px urbane;
        background-color: transparent;
        outline: none;
        border: none;
        cursor: pointer;
        overflow: hidden;
        width: 100%;
        border-radius: 50px;
        transition: all 0.1s;
      }
      .order-modal-layer .sizefit-switch input[type="radio"] {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        margin: 0;
        opacity: 0;
      }
      #tab-1:checked ~ .btn,
      #tab-2:checked ~ .btn {
        background: #000000;
        color: #fff;
      }
      .order-modal-layer .order-layer-body {
        padding: 20px 40px;
        padding-bottom: 40px;
      }
      .sizefit-box {
        width: 35%;
      }
      .sizefit-item {
        justify-content: space-between;
      }
      .sizefit-item:not([data-last="yes"]) {
        margin-bottom: 25px;
      }

      .sizefit-item p {
        font: normal normal 600 12px/14px urbane;
        color: #2b2e34;
        margin: 0;
      }
      .sizefit-item span {
        font: normal normal 300 12px/14px urbane;
        color: #2b2e34;
      }
      .sizefit-bg {
        flex: 1;
        height: 340px;
        margin-left: 50px;
        background-image: url("https://cdn.shopify.com/s/files/1/0633/2068/6808/files/Group_20267.svg");
        background-position: center;
        background-size: auto 100%;
      }
      .sizefitx-bg {
        background-image: url("https://cdn.shopify.com/s/files/1/0633/2068/6808/files/Group_20662.svg");
      }
      .dialog-open {
        animation-name: anim-open;
        animation-duration: 0.3s;
        animation-fill-mode: forwards;
      }
	  .dialog-close {
		animation-name: anim-close;
		animation-duration: 0.3s;
		animation-fill-mode: forwards;
	  }

      .dialog-close-out {
        animation-name: anim-close-out;
        animation-duration: 0.3s;
        animation-fill-mode: forwards;
      }

      /* modal2 */
      .tec-spac-t {
        font: normal normal 600 20px/24px urbane;
        border-bottom: 2px solid #eee;
        padding-bottom: 4px;
      }
      .tec-spac-b {
        display: flex;
        flex-wrap: wrap;
        align-items: baseline;
        justify-content: space-between;
      }
      .tec-spac-b .tec-spac-item {
        display: flex;
        flex-direction: column;
        width: 30%;
        align-items: baseline;
        margin-bottom: 24px;
      }
      .tec-spac-item2 {
        justify-content: space-between;
      }
      .tec-spac-item2 p {
        font: normal normal 300 12px/17px urbane;
        margin: 0;
        margin-top: 12px;
        color: #161c1f;
        width: 30%;
      }
      .tec-spac-item2 img {
        width: 66%;
      }
      .tec-spac-b .tec-spac-item h4 {
        font: normal normal 600 16px/25px urbane;
        margin: 0;
        color: #4d4d4d;
      }
      .tec-spac-b .tec-spac-item p {
        font: normal normal 300 12px/17px urbane;
        margin: 0;
        margin-top: 12px;
        color: #161c1f;
      }
      @media screen and (max-width: 500px) {
        .order-modal-layer .order-layer-box {
          width: 90vw;
          min-width: auto;
        }
        #chord-dom,
        #chordx-dom {
          flex-direction: column-reverse;
        }
        .order-modal-layer .sizefit-switch {
          margin: 20px auto;
        }
        .sizefit-box {
          width: 100%;
        }
        .order-modal-layer .sizefit-switch {
          width: 80%;
        }
        .sizefit-bg {
          flex: inherit;
          height: 200px;
          width: 100%;
          margin-left: 0;
          margin-bottom: 20px;
        }
        .tec-spac-b {
          flex-direction: column;
        }
        .tec-spac-b .tec-spac-item {
          width: 100%;
        }

        .tec-spac-item2 {
          flex-direction: column;
        }
        .tec-spac-item2 p {
          width: 100%;
        }
        .tec-spac-item2 img {
          width: 100%;
          margin-top: 30px;
        }
      }
      @keyframes anim-open {
        0% {
          opacity: 0;
          -webkit-transform: scale3d(1.1, 1.1, 1);
          transform: scale3d(1.1, 1.1, 1);
        }
        100% {
          opacity: 1;
          -webkit-transform: scale3d(1, 1, 1);
          transform: scale3d(1, 1, 1);
        }
      }
  @keyframes anim-close-out {
        0% {
          opacity: 1;
        }

        100% {
          opacity: 0;
        }
      }
    </style>


<style>
.order-modal-layer-three .tec-spac-b .tec-spac-item {
    width: 50%;
    padding: 15px 175px 15px 0;
    box-sizing: border-box;
}


.order-modal-layer-three .opacity {
    opacity: 0.7;
    margin-top: 15px;
}

.order-modal-layer-three .opacity p {
    color: #000;
}

.order-modal-layer-three .tec-spac-item2 {
    align-items: flex-start;
}

.order-modal-layer-three .tec-spac-item2 > div {
    display: flex;
    flex-direction: column;
    padding:0 30px 60px 0;
}

.order-modal-layer-three .tec-spac-item2 > img {
    width: 100%;
    margin-top: 15px;
}

.order-modal-layer-three .tec-spac-item2 > div p {
    width: auto;
}

.order-modal-layer-three .tec-spac-item2 > div p:last-child {
    margin-top: 30px;
}

.order-modal-layer-three .opacity p:first-child {
    font-weight: 600;
}

.order-modal-layer-three .tec-spac-b .tec-spac-item h4,
.order-modal-layer-three .tec-spac-t {
    color: #000;
}


@media screen and (max-width: 500px) {
    .order-modal-layer-three .tec-spac-item2 {
        position: relative;
        padding-bottom: 100px;
    }

    .order-modal-layer-three .tec-spac-item2 a {
        position: absolute;
        bottom: 40px;
    }

    .order-modal-layer-three .tec-spac-b .tec-spac-item {
        width: auto;
        padding-right: 0;
    }

    .order-modal-layer-three .tec-spac-item2 > div {
        padding-right: 0;
        padding-bottom: 0;
    }
}

</style>