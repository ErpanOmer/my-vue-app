<style lang="scss">
@import '../styles/amazon.scss';
</style>

<template>
    <div class="top">
        <h2 class="u36DemiBold_v2">Welcome to Urtopia Family!</h2>
    </div>
    <div class="step step1">
        <form action="" method="post" class="centeral-content">
            <i><img src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/2.svg?v=1728629250" alt=""></i>
            <h3 class="u17Medium_v2">Please provide the following information to register your warranty:</h3>
            <div class="item">
                <div class="mini-item">
                    <div>
                        <div class="u24Medium">First name<i>*</i></div>
                        <input type="text" name="first_name" required>
                    </div>
                    <div>
                        <div class="u24Medium">Last name<i>*</i></div>
                        <input type="text" name="last_name" required>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="u24Medium">Email<i>*</i></div>
                <input type="email" name="email" required>
            </div>
            <div class="item">
                <div class="u24Medium">Phone number<i>*</i></div>
                <input type="tel" name="phone" required>
            </div>
            <div class="item">
                <div class="u24Medium">Delivery address<i>*</i></div>
                <input type="text" name="address" autocomplete="address-line1" required>
                <span class="clear">×</span>
            </div>
            <div class="item">
                <div class="mini-item">
                    <div>
                        <div class="u24Medium">Postal code<i>*</i></div>
                        <input type="text" name="postal_code" autocomplete="postal-code" required>
                    </div>
                    <div>
                        <div class="u24Medium">City<i>*</i></div>
                        <input type="text" name="city" autocomplete="address-level2" required>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="u24Medium">Bike Model<i>*</i></div>
                <select name="bike_model" value="carbon1pro" required disabled>
                    <option value="">---</option>
                    <!--<option value="carbonwhiteglow">White Glow</option>-->
                    <option value="carbon1">Carbon 1</option>
                    <option value="fusion">Fusion</option>
                    <option value="carbon1pro">Carbon 1 Pro</option>
                    <option value="chord">Chord</option>
                </select>
                <span class="tips u14Light_v2"></span>
            </div>
            <div class="item">
                <div class="u24Medium">Bike Frame Number<i>*</i></div>
                <input type="text" name="frame_number" required>
            </div>
            <div class="item frame_number">
                <span class="u14Medium_v2">How to find your bike frame number?</span>
                <span class="u14Light_v2">You can find the frame number of your Urtopia e-bike on the underside of the
                    bottom bracket.</span>
                <div>
                    <img src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/24545_2x_bc336f31-0435-4773-87f1-57975051e755.jpg?v=1728631363"
                        alt="">
                    <img src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/19345_2x_963d6e25-4cdf-4ee3-b6e8-7ff8d1ffbe86.jpg?v=1728631369"
                        alt="">
                </div>
            </div>
            <div class="item">
                <div class="u24Medium">Place of purchase<i>*</i></div>
                <input type="text" name="purchase" value="Amazon" required disabled>
            </div>
            <div class="item">
                <button class="my-button my-button-black" type="submit">Submit</button>
            </div>
        </form>
    </div>
    <div class="step step2">
        <div class="centeral-content">
            <i><img src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/Notes_about_warranty.svg?v=1728632163"
                    alt=""></i>
            <p class="u17Medium_v2">
                <span>
                    Congratulations! Your warranty will be valid from <span
                        style="color: #005CF0;">[MM][DD][YYYY]</span> to <span
                        style="color: #005CF0;">[MM][DD][YYYY]</span>. You can print
                    this page and save for future claims. <br><br>We would love to hear your opinions. You can give a
                    review on
                    your new bike and <span style="color: #005CF0;">earn 1-year extended warranty and free
                        accessories.</span> It takes only 5 mins. Do you
                    want to continue?
                </span>
            </p>
            <div class="buttons">
                <div style="background-color: #005CF0;color: #fff;border-color: transparent;margin-right: 15px;"
                    class="my-button my-button-white" onclick="gotoStep(3)">Continue</div>
                <div class="my-button my-button-white" onclick="gotoStep(5)">Later</div>
            </div>
        </div>
    </div>
    <div class="step step3">
        <div class="centeral-content">
            <i><img src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/amazon-circle-fill.svg?v=1728633482"
                    alt=""></i>
            <h3 class="u20DemiBold_v2">How to give a review on Amazon</h3>
            <div>
                <p class="u17Medium_v2">
                    <span>
                        Step 1: Go to Place of Purchase
                    </span>
                </p>
                <p class="u14Light_v2">
                    <span>
                        Navigate to <a target="_blank" href="https://www.amazon.com/" class="my-link">Amazon.com</a> log
                        in to your Amazon account.
                    </span>
                </p>
                <img src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/71_2x_60e68e63-9616-45f9-bde9-6dea5d395329.jpg?v=1728634105"
                    alt="">
            </div>
            <div>
                <p class="u17Medium_v2">
                    <span>
                        Step 2: Access Your Orders
                    </span>
                </p>
                <p class="u14Light_v2">
                    <span>
                        1. My Orders: Once logged in, hover over “Accounts & Lists” and select “Your Orders” from the
                        dropdown menu. <br><br>2. Order History: This will take you to your Order History page, where
                        you can see all your past purchases.
                    </span>
                </p>
                <img src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/19346_2x_53c866f2-4f75-4889-a5d1-a09dcee89819.jpg?v=1728634330"
                    alt="">
            </div>
            <div>
                <p class="u17Medium_v2">
                    <span>
                        Step 3: Find the Specific Order
                    </span>
                </p>
                <p class="u14Light_v2">
                    <span>
                        1. Search or Scroll: You can either scroll down to find the specific order you want to review or
                        use the search bar at the top of the page to enter the product name or order number. <br><br>2.
                        Locate Write a Review: On the Order Details page, scroll down to the product(s) you want to
                        review. Next to each product, you’ll see a “Write a product review” button. Click on it.
                    </span>
                </p>
                <img src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/73_2x_1632a6f1-885d-4e52-841e-497f842b6e65.jpg?v=1728634335"
                    alt="">
            </div>
            <div>
                <p class="u17Medium_v2">
                    <span>
                        Step 4: Write a Review
                    </span>
                </p>
                <p class="u14Light_v2">
                    <span>
                        1. Rate the Product: Start by selecting a star rating from 1 to 5 stars. 5 stars indicate the
                        highest. <br><br>2. Title: Enter a brief title that summarizes your review. This will appear in
                        bold
                        above your review text. <br><br>3. Review: In the “Add a written review” box, write a detailed
                        review of
                        the product. Share your thoughts for other customer <br><br>4. Submit: Once you’re satisfied
                        with your
                        review, click the “Submit” button at the bottom of the page.
                    </span>
                </p>
                <img src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/74_2x_34294f79-fb4a-453c-9a15-cd69734de863.jpg?v=1728634341"
                    alt="">
            </div>
            <div>
                <p class="u17Medium_v2">
                    <span>
                        Step 5: Take a Screenshot
                    </span>
                </p>
                <p class="u14Light_v2">
                    <span>
                        1. Use your screenshot button on your PC/cellphone or any other tool to take a screenshot.
                        <br><br>2. Save the screenshot and upload later.
                    </span>
                </p>
                <img src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/75_2x_b16f56b8-14ea-462e-b196-5c30194868d5.jpg?v=1728634348"
                    alt="">
            </div>
            <div>
                <p class="u17Medium_v2">
                    <span>
                        Upload your screenshot here
                    </span>
                </p>
                <div>
                    <input type="file">
                </div>
            </div>
            <div style="background-color: #005CF0;color: #fff;border-color: transparent;margin-right: 15px;"
                class="my-button my-button-white" onclick="IHavefinished()">I Have finished</div>
        </div>
    </div>
    <div class="step step4">
        <div class="centeral-content">
            <i><img src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/1_0fecafb3-5773-4994-a598-b8b30b1914cd.svg?v=1728639208" alt=""></i>
            <p class="u17Medium_v2">
                <span>
                    Congratulations! Your experience is invaluable to our community. Here are the rewards you get:
                </span>
            </p>
            <img src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/screenshot-20241011-171859.png?v=1728638352"/>
            <p class="u17Medium_v2">
                <span>
                    Once verified, the rewards will be automatically sent to your address.
                </span>
            </p>
            
            <div style="background-color: #005CF0;color: #fff;border-color: transparent;margin-right: 15px;"
                class="my-button my-button-white" onclick="gotoStep(6)">Verified</div>
        </div>
    </div>
    <div class="step step5">
        <div class="centeral-content">
            <i><img src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/right.svg?v=1728632798" alt=""></i>
            <p class="u17Medium_v2">
                <span>
                    Thanks for choosing Urtopia. Enjoy your ride. Come back to give your review any time!
                </span>
            </p>
            <a href="/" style="background-color: #005CF0;color: #fff;border-color: transparent;margin-right: 15px;"
                class="my-button my-button-white">Go to Home</a>
        </div>
    </div>
    <div class="step step6">
        <div class="centeral-content">
            <i><img src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/1_0fecafb3-5773-4994-a598-b8b30b1914cd.svg?v=1728639208" alt=""></i>
            <p class="u17Medium_v2">
                <span>
                    You have now completed all requested moves! Please wait for your gifts to arrive!
                </span>
            </p>
            <a href="/" style="background-color: #005CF0;color: #fff;border-color: transparent;margin-right: 15px;"
                class="my-button my-button-white">Go to Home</a>
        </div>
    </div>
</template>