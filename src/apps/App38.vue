<style lang="scss">
@import '../styles/forms.scss';
</style>


<template>
    <div class="forms" id="forms">
        <div class="centeral-content">
            <div>
                <div class="texts">
                    <img src="https://cdn.shopify.com/s/files/1/0633/2068/6808/files/jr-color_2x_1c8a412f-c3e7-471b-bbf6-66fdf962538f.png?v=1684121689"
                        alt="">
                    <div class="u36DemiBold_v2">Urtopia leasing request form</div>
                    <div class="u20DemiBold_v2">Step 1:</div>
                    <div class="u17DemiBold_v2">Fill in your contact info</div>
                    <div class="u17Light_v2">We require your contact information to communicate important updates and
                        facilitate the leasing process. Rest assured, your details will be kept confidential and used solely
                        for lease-related communications.</div>
                </div>
                <div class="steps">
                    <div class="progress">
                        <div class="item active">
                            <div class="u24DemiBold_v2">1</div>
                            <div class="u17DemiBold_v2">Contact Info</div>
                        </div>
                        <div class="item">
                            <div class="u24DemiBold_v2">2</div>
                            <div class="u17DemiBold_v2">Shipping Info</div>
                        </div>
                        <div class="item">
                            <div class="u24DemiBold_v2">3</div>
                            <div class="u17DemiBold_v2">Bike Selection</div>
                        </div>
                        <div class="success">
                            <img src="https://cdn.shopify.com/s/files/1/0633/2068/6808/files/Group_21035_2x_7835d09b-ec3a-4068-abb7-3ed0bf390ad0.png?v=1684123007"
                                alt="">
                        </div>
                    </div>
                    <div class="items step-1">
                        <form action="" method="post">
                            <div class="item">
                                <div class="u24Medium">Your employer already offers JobRad?<i>*</i></div>
                                <div class="multiple-checkbox">
                                    <label for="yes">
                                        <img src="https://cdn.shopify.com/s/files/1/0633/2068/6808/files/Group_20956_2x_28b3e62b-ae48-4b7c-a025-4db2d0cdbf2d.png?v=1683713191"
                                            alt="">
                                        <span class="u17Medium_v2">Yes</span>
                                        <input type="radio" id="yes" name="offers" value="yes" required />
                                    </label>
                                    <label for="no">
                                        <img src="https://cdn.shopify.com/s/files/1/0633/2068/6808/files/Group_20956_2x_28b3e62b-ae48-4b7c-a025-4db2d0cdbf2d.png?v=1683713191"
                                            alt="">
                                        <span class="u17Medium_v2">Not sure</span>
                                        <input type="radio" id="no" name="offers" value="no" required />
                                    </label>
                                </div>
                            </div>
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
                                <div class="u24Medium">Employer<i>*</i></div>
                                <input type="text" name="employer" required>
                            </div>
                            <div class="buttons">
                                <button class="my-button my-button-black" type="submit">Next</button>
                            </div>
                        </form>
                    </div>
                    <div class="items step-2">
                        <form action="" method="post">
                            <div class="item">
                                <div class="u24Medium">Delivery address<i>*</i></div>
                                <input type="text" name="address" required>
                            </div>
                            <div class="item">
                                <div class="mini-item">
                                    <div>
                                        <div class="u24Medium">Postal code<i>*</i></div>
                                        <input type="text" name="postal_code" required>
                                    </div>
                                    <div>
                                        <div class="u24Medium">City<i>*</i></div>
                                        <input type="text" name="city" required>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="u24Medium">Country<i>*</i></div>
                                <input type="text" name="country" value="Deutschland" disabled required>
                            </div>
                            <div class="buttons">
                                <div class="my-button my-button-white pervious">Pervious</div>
                                <button class="my-button my-button-black" type="submit">Next</button>
                            </div>
                        </form>
                    </div>
                    <div class="items step-3">
                        <form action="" method="post">
                            <div class="u17DemiBold_v2">Bike you choose:</div>
                            <img src="https://cdn.shopify.com/s/files/1/0633/2068/6808/files/Mask_Group_18562_2x_d5c1f716-cf97-484c-89bd-b9165c330c11.jpg?v=1684139146"
                                alt="">
                            <div class="item">
                                <div class="u24Medium">Bike Model<i>*</i></div>
                                <input type="text" name="bike_model" value="Carbon 1" disabled required>
                            </div>
                            <div class="item">
                                <div class="mini-item">
                                    <div>
                                        <div class="u24Medium">Bike Size<i>*</i></div>
                                        <select name="bike_size" required>
                                            <option value="---">---</option>
                                            <!--<option value="M">M - Fit for 170-185 cm</option>
                              <option value="L">L - Fit for 180-195 cm</option>
                              -->
                                        </select>
                                    </div>
                                    <div>
                                        <div class="u24Medium">Bike Style<i>*</i></div>
                                        <select name="bike_style" required>
                                            <option value="---">---</option>
                                            <!--<option value="Sirius">Sirius</option>
                              <option value="Lyra">Lyra</option>
                              <option value="Midnight in Paris">Midnight in Paris</option>
                              <option value="Vanilla">Vanilla</option>
                              -->
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="u24Medium">Accessories you would like
                                    <br><span
                                        style="font-size: 12px;color: #666;line-height: 16px;display: inline-block;">Father’s
                                        Day gifts: kickstand, Fender, water bottle cage will sent to you automatically, will
                                        not show in your jobrad offer (Ends on 18th of May)</span>
                                </div>
                                <select name="accessories" multiple>
                                    <!-- {% for collection in collections %}
                                    {% if collection.title == 'Carbon 1 leasing acc' %}
                                    {% for product in collection.products %}
                                    <option title="{{product.title}}" value="{{product.id}}">{{ product.title }}</option>
                                    {% endfor %}
                                    {% endif %}
                                    {% endfor %} -->
                                </select>
                                <!-- <input type="text" name="accessories" placeholder="Example: Extra-Comfort Saddle, Battery" > -->
                            </div>
                            <div class="item">
                                <div class="u24Medium">Note</div>
                                <input type="text" name="note">
                            </div>
                            <div class="item">
                                <div class="checkbox">
                                    <input type="checkbox" id="subscribe" name="subscribe" value="subscribe" required />
                                    <label class="u17Light" for="subscribe" style="text-align: left;">I agree to allow
                                        Urtopia to store and process my
                                        personal data, including receiving emails, text messages and SMS.<i>*</i></label>
                                </div>
                            </div>
                            <div class="buttons">
                                <div class="my-button my-button-white pervious">Pervious</div>
                                <button class="my-button my-button-black" type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                    <div class="items step-4">
                        <div class="u24DemiBold_v2">Submition Detail</div>
                        <div class="infos">
                            <div class="info" name="first_name">
                                <label class="u17DemiBold_v2">First name:</label>
                                <span class="u17Light_v2">stephen</span>
                            </div>
                            <div class="info" name="last_name">
                                <label class="u17DemiBold_v2">Last name:</label>
                                <span class="u17Light_v2">stephen</span>
                            </div>
                            <div class="info" name="email">
                                <label class="u17DemiBold_v2">Email:</label>
                                <span class="u17Light_v2">stephen</span>
                            </div>
                            <div class="info" name="phone">
                                <label class="u17DemiBold_v2">Phone number:</label>
                                <span class="u17Light_v2">stephen</span>
                            </div>
                            <div class="info" name="employer">
                                <label class="u17DemiBold_v2">Employer:</label>
                                <span class="u17Light_v2">stephen</span>
                            </div>
                            <div class="info" name="address">
                                <label class="u17DemiBold_v2">Delivery address:</label>
                                <span class="u17Light_v2">stephen</span>
                            </div>
                            <div class="info" name="postal_code">
                                <label class="u17DemiBold_v2">Postal code:</label>
                                <span class="u17Light_v2">stephen</span>
                            </div>
                            <div class="info" name="city">
                                <label class="u17DemiBold_v2">City:</label>
                                <span class="u17Light_v2">stephen</span>
                            </div>
                            <div class="info" name="country">
                                <label class="u17DemiBold_v2">Country:</label>
                                <span class="u17Light_v2">stephen</span>
                            </div>
                            <div class="info" name="bike">
                                <label class="u17DemiBold_v2">Bike Detail:</label>
                                <span class="u17Light_v2">
                                    <img src="https://cdn.shopify.com/s/files/1/0633/2068/6808/files/Mask_Group_18562_2x_d5c1f716-cf97-484c-89bd-b9165c330c11.jpg?v=1684139146"
                                        alt="">
                                    <span class="bike_size_style">Carbon 1, sirus, Large(fit for 180-195 cm)</span>
                                </span>
                            </div>
                            <div class="info" name="accessories">
                                <label class="u17DemiBold_v2">Accessories:</label>
                                <span class="u17Light_v2"></span>
                            </div>
                            <div class="info" name="note">
                                <label class="u17DemiBold_v2">Note:</label>
                                <span class="u17Light_v2"></span>
                            </div>
                            <div class="u14Light_v2">If the information above is incorrect, please submit <br
                                    class="mobileHide">again or email
                                us at leasing@newurtopia.com</div>
                        </div>
                        <div class="buttons">
                            <div class="my-button my-button-white again">Submit again</div>
                            <a class="my-button my-button-black" href="">Contact us</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
    const forms = {}
    let currentStep = 1
    const ignore = ['submit', 'checkbox']
    const size_map = {
        M: 'Fit for 170-185 cm',
        L: 'Fit for 180-195 cm'
    }


    function reset() {
        currentStep = 1
        // 重置全部表单
        $('form').each((i, t) => t.reset())
        $('.forms .steps input[name="country"]').val('Deutschland')
        $('.forms .steps input[name="bike_model"]').val('Carbon 1')
        // 重置
        updateProgress(currentStep)
    }


    function updateProgress(step = 1) {
        $('.forms .steps .progress .item').removeClass('active')
        $('.forms .steps .progress .success').removeClass('active')
        $('.forms .steps .items').hide()
        $(`.forms .steps .step-${step}`).show()

        // 批量active
        for (let index = 0; index < step; index++) {
            $($('.forms .steps .progress .item')[index]).addClass('active')
        }

        if (step === 1) {
            // 左侧信息变更
            $('.forms .texts .u36DemiBold_v2').html('Urtopia leasing <br>request form')
            $('.forms .texts .u20DemiBold_v2').text('Step 1:')
            $('.forms .texts .u17DemiBold_v2').text('Fill in your contact info and employer')
            $('.forms .texts .u17Light_v2').html('We require your contact information to communicate important updates and facilitate the leasing process. Rest assured, your details will be kept confidential and used solely for lease-related communications. <br><br>To verify your employment status for leasing purposes, kindly provide your current employer’s name. This helps us ensure the validity of your application and facilitates a smooth leasing process.')
        }

        if (step === 2) {
            // 左侧信息变更
            $('.forms .texts .u36DemiBold_v2').html('Urtopia leasing <br>request form')
            $('.forms .texts .u20DemiBold_v2').text('Step 2:')
            $('.forms .texts .u17DemiBold_v2').text('Fill in your shipping info')
            $('.forms .texts .u17Light_v2').text('We need your shipping address to deliver the leased e-bike to your preferred location. Please provide the complete address. This ensures accurate and timely delivery of your chosen product.')
        }

        if (step === 3) {
            // 左侧信息变更
            $('.forms .texts .u36DemiBold_v2').html('Urtopia leasing <br>request form')
            $('.forms .texts .u20DemiBold_v2').text('Step 3:')
            $('.forms .texts .u17DemiBold_v2').text('Select your bike for leasing')
            $('.forms .texts .u17Light_v2').html('specify the e-bike model and style you desire for your lease. Also the accessories you want to add. <br><br>This information helps us fulfill your specific preferences and ensure we provide you with the e-bike that best suits your needs. <br><br>Don’t forget the leave us a note if you have any specific requirement.')
        }

        if (step === 4) {
            // 左侧信息变更
            $('.forms .steps .progress .success').addClass('active')

            $('.forms .texts .u36DemiBold_v2').text('Thank you!')
            $('.forms .texts .u20DemiBold_v2').text('')
            $('.forms .texts .u17DemiBold_v2').text('You have successfully submit the form.')
            $('.forms .texts .u17Light_v2').html('We appreciate your cooperation in providing this information. Please check your information on the right. <br><br>If you have any questions or require further assistance, please don’t hesitate to reach out to our dedicated leasing support team at leasing@newurtopia.com. <br><br>Next out expert will contact and guide you through the process and make your leasing experience with Urtopia as seamless as possible.')

            // 重新提交
            $(`.step-4 .buttons .again`).on('click', reset)

            $('.forms form :input').each((index, target) => {
                if (ignore.includes(target.type)) {
                    return
                }

                // 配件特殊处理
                if (target.name === 'accessories') {
                    const accessories = []
                    const accessories_id = []

                    // selected
                    $(target).find('option:selected').each((i, target) => {
                        accessories.push(target.title)
                        accessories_id.push(target.value)
                    })


                    forms.accessories = accessories.join()
                    forms.accessories_id = accessories_id.join()
                    $(`.forms .infos .info[name="${target.name}"] span`).text(accessories.join())

                    return
                }


                forms[target.name] = target.value
                $(`.forms .infos .info[name="${target.name}"] span`).text(target.value)
            })


            $('.bike_size_style').text(`${forms.bike_model},${forms.bike_style},${forms.bike_size}(${size_map[forms.bike_size]})`)
            console.log('forms', forms)
        }


        setTimeout(() => {
            $(`.step-${step} .buttons .pervious`).on('click', () => updateProgress(step - 1))
        }, 300)

        // 当前步骤存起来
        currentStep = Math.max(step, currentStep)
    }


    // 阻止默认行为
    $('.forms form').on('submit', e => {
        e.preventDefault();

        const parent = e.target.parentNode

        // step: 1
        parent.classList.contains('step-1') && updateProgress(2)

        // step: 2
        parent.classList.contains('step-2') && updateProgress(3)

        // step: 3
        parent.classList.contains('step-3') && updateProgress(4)

        return false;
    })

    $('.forms .steps .progress .item').each((i, item) => {
        const index = i + 1
        $(item).on('click', e => {
            console.log('currentStep', currentStep)

            if (index > currentStep || currentStep === 4) {
                return
            }

            updateProgress(index)
        })
    })


    $('form .multiple-checkbox :input').on('change', e => {
        if (e.currentTarget.id === 'yes') {
            $(`form .multiple-checkbox label[for="yes"]`).css("border-color", "black")
            $(`form .multiple-checkbox label[for="yes"] img`).css('display', 'unset')
            $(`form .multiple-checkbox label[for="no"]`).css("border-color", "#00000034")
            $(`form .multiple-checkbox label[for="no"] img`).css('display', 'none')
        } else {
            $(`form .multiple-checkbox label[for="no"]`).css("border-color", "black")
            $(`form .multiple-checkbox label[for="no"] img`).css('display', 'unset')
            $(`form .multiple-checkbox label[for="yes"]`).css("border-color", "#00000034")
            $(`form .multiple-checkbox label[for="yes"] img`).css('display', 'none')
        }

    })

    // 默认执行step:1
    updateProgress(1)
})
</script>