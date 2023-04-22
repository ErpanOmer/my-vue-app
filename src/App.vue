<style lang="scss">
@import './styles/collection.scss';
</style>

<template>
    <div class="compared">
        <div class="centeral-content">
            <div class="items">
                <div class="item">
                    <div class="dimension" style="justify-content: center;">
                        <div class="u42DemiBold_v2">Find Your Match</div>
                        <div class="u20Medium_v2">Can’t decide which frame fits you like a glove? Let’s compare them side by
                            side and find your match!</div>
                    </div>
                    <div class="params">
                        <div class="param" name="img">
                            <img src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/1_1_2x_c29f513e-3efa-4fb3-a74d-f83107bdd824.png?v=1677639590"
                                alt="">
                            <div class="select">
                                <select index="0"></select>
                            </div>
                        </div>
                        <div class="param" name="img">
                            <img src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/Mask_Group_18297_2x_eae075fb-1d14-4217-bbef-0d2f2e476f2e.png?v=1677640028"
                                alt="">
                            <div class="select">
                                <select index="1"></select>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="dimension u24DemiBold_v2">Size <i class="pcHide">∨</i></div>
                    <div class="params">
                        <div class="param u17Medium_v2" name="size">Fit for 170 cm - 195 cm</div>
                        <div class="param u17Medium_v2" name="size">Fit for 170 cm - 195 cm</div>
                    </div>
                </div>
                <div class="item">
                    <div class="dimension u24DemiBold_v2">Weight</div>
                    <div class="params">
                        <div class="param u17Medium_v2" name="weight">20.9 kg</div>
                        <div class="param u17Medium_v2" name="weight">15.7 kg</div>
                    </div>
                </div>
                <div class="item">
                    <div class="dimension u24DemiBold_v2">Load-bearing capacity</div>
                    <div class="params">
                        <div class="param u17Medium_v2" name="capacity">Max. 130 kg</div>
                        <div class="param u17Medium_v2" name="capacity">Max. 120 kg</div>
                    </div>
                </div>
                <div class="item">
                    <div class="dimension u24DemiBold_v2">Dimensions</div>
                    <div class="params params-dimensions">
                        <div class="param u17Medium_v2" name="dimensions">

                            <img src="https://cdn.shopify.com/s/files/1/0633/2068/6808/files/bike_2x_329ad618-2567-4400-ab11-8e01e5ca3abf.png?v=1682065701"
                                alt="">
                            <div class="u14DemiBold_v2 pcHide"></div>
                            <div class="sizes"></div>
                        </div>
                        <div class="param u17Medium_v2" name="dimensions">

                            <img src="https://cdn.shopify.com/s/files/1/0633/2068/6808/files/bike_2x_329ad618-2567-4400-ab11-8e01e5ca3abf.png?v=1682065701"
                                alt="">
                            <div class="u14DemiBold_v2 pcHide"></div>
                            <div class="sizes"></div>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="dimension u24DemiBold_v2">Gearing</div>
                    <div class="params">
                        <div class="param u17Medium_v2" name="gearing">8-Speed Shimano rear derailleur</div>
                        <div class="param u17Medium_v2" name="gearing">7-Speed Shimano rear derailleur</div>
                    </div>
                </div>
                <div class="item">
                    <div class="dimension u24DemiBold_v2">Smart Features</div>
                    <div class="params">
                        <div class="param u17Medium_v2" name="features">Voice control, fingerprint start, LED dot-matrix
                            display, haptic interaction, bluetooth music, built-in navigation, GPS tracking, OTA upgrade
                        </div>
                        <div class="param u17Medium_v2" name="features">Voice control, fingerprint start, LED dot-matrix
                            display, haptic interaction, bluetooth music, built-in navigation, GPS tracking, OTA upgrade
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="dimension u24DemiBold_v2">Range</div>
                    <div class="params">
                        <div class="param u17Medium_v2" name="range">50-120 km</div>
                        <div class="param u17Medium_v2" name="range">40-100 km</div>
                    </div>
                </div>
                <div class="item">
                    <div class="dimension u24DemiBold_v2">Body Materials</div>
                    <div class="params">
                        <div class="param u17Medium_v2" name="materials">6061 aluminum with liquid forging technology.</div>
                        <div class="param u17Medium_v2" name="materials">6061 aluminum with liquid forging technology.</div>
                    </div>
                </div>
                <div class="item">
                    <div class="dimension u24DemiBold_v2">IoT sensors</div>
                    <div class="params">
                        <div class="param u17Medium_v2" name="sensors">Accelerometer, gyroscope, torque</div>
                        <div class="param u17Medium_v2" name="sensors">Accelerometer, gyroscope, torque</div>
                    </div>
                </div>
                <div class="item">
                    <div class="dimension u24DemiBold_v2">Motor</div>
                    <div class="params">
                        <div class="param u17Medium_v2" name="motor">Customized rear hub, 36 V 250 W, 45 N⋅m</div>
                        <div class="param u17Medium_v2" name="motor">Customized rear hub, 36 V 250 W, 45 N⋅m</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
import { onMounted } from 'vue';

const parameters = [
    {
        name: 'Carbon 1',
        img: 'https://cdn.shopify.com/s/files/1/0583/5810/4213/files/Mask_Group_18298_2x_c9d66b5e-a0bb-4339-92db-e30b51859060.png?v=1677640298',
        size: 'Fit for 170 cm - 185 cm',
        weight: '15 kg',
        capacity: 'Max. 120 kg',
        gearing: 'Gates carbon Drive belt',
        features: 'Voice control, fingerprint start, LED dot-matrix display, haptic interaction, bluetooth music, built-in navigation, GPS tracking, OTA upgrade',
        range: '40-100 km',
        materials: '6061 aluminum with liquid forging technology.',
        sensors: 'Accelerometer, gyroscope, torque',
        motor: 'Customized rear hub, 36 V 250 W, 35 N⋅m',
        dimensions: {
            img: 'https://cdn.shopify.com/s/files/1/0633/2068/6808/files/Mask_Group_18460_1.svg?v=1682070375',
            sizes: [
                ['A. Standover height', '800 mm'],
                ['B. Adjustable seat range', '60 mm'],
                ['C. Handlebar grips height', '1010 mm'],
                ['D. Seat tube length', '460 mm'],
                ['E. Wheelbase', '1080 mm'],
                ['F. Overall length', '1810 mm'],
                ['G. Wheel diameter', '690 mm'],
                ['H. Top tube length (effective)', '580 mm'],
                ['I. Head tube length', '170 mm'],
                ['J. Headset height', '100 mm'],
            ]
        }
    },
    {
        name: 'Carbon 1S',
        img: 'https://cdn.shopify.com/s/files/1/0583/5810/4213/files/Mask_Group_18297_2x_eae075fb-1d14-4217-bbef-0d2f2e476f2e.png?v=1677640028',
        size: 'Fit for 170 cm - 195 cm',
        weight: '15.7 kg',
        capacity: 'Max. 120 kg',
        gearing: '7-Speed Shimano rear derailleur',
        features: 'Voice control, fingerprint start, LED dot-matrix display, haptic interaction, bluetooth music, built-in navigation, GPS tracking, OTA upgrade',
        range: '40-100 km',
        materials: '6061 aluminum with liquid forging technology.',
        sensors: 'Accelerometer, gyroscope, torque',
        motor: 'Customized rear hub, 36 V 350 W, 45 N⋅m',
        dimensions: {
            img: 'https://cdn.shopify.com/s/files/1/0633/2068/6808/files/Mask_Group_18462_1.svg?v=1682070384',
            sizes: [
                ['A. Standover height', '800 mm'],
                ['B. Adjustable seat range', '60 mm'],
                ['C. Handlebar grips height', '1010 mm'],
                ['D. Seat tube length', '460 mm'],
                ['E. Wheelbase', '1080 mm'],
                ['F. Overall length', '1810 mm'],
                ['G. Wheel diameter', '690 mm'],
                ['H. Top tube length (effective)', '580 mm'],
                ['I. Head tube length', '170 mm'],
                ['J. Headset height', '100 mm'],
            ]
        }
    },
    {
        name: 'Chord',
        img: 'https://cdn.shopify.com/s/files/1/0583/5810/4213/files/1_1_2x_c29f513e-3efa-4fb3-a74d-f83107bdd824.png?v=1677639590',
        size: 'Fit for 170 cm - 195 cm',
        weight: '20.9 kg',
        capacity: 'Max. 130 kg',
        gearing: '8-Speed Shimano rear derailleur',
        features: 'Voice control, fingerprint start, LED dot-matrix display, haptic interaction, bluetooth music, built-in navigation, GPS tracking, OTA upgrade',
        range: '50-120 km',
        materials: '6061 aluminum with liquid forging technology.',
        sensors: 'Accelerometer, gyroscope, torque',
        motor: 'Customized rear hub, 36 V 250 W, 45 N⋅m',
        dimensions: {
            img: 'https://cdn.shopify.com/s/files/1/0633/2068/6808/files/Group_20267.svg',
            sizes: [
                ['A. Standover height', '810 mm'],
                ['B. Adjustable seat range', '100 mm'],
                ['C. Handlebar grips height', '1100-1130 mm'],
                ['D. Seat tube length', '500 mm'],
                ['E. Wheelbase', '1094 mm'],
                ['F. Overall length', '1800 mm'],
                ['G. Wheel diameter', '700 mm'],
                ['H. Top tube length (effective)', '620 mm'],
                ['I. Head tube length', '200 mm'],
                ['J. Headset height', '90-120 mm'],
            ]
        }
    },
    {
        name: 'Chord X',
        img: 'https://cdn.shopify.com/s/files/1/0583/5810/4213/files/Mask_Group_18400_2x_6789324f-33d2-4342-9519-0ee3bc943699.png?v=1677639718',
        size: 'Fit for 170 cm - 195 cm',
        weight: '20.9 kg',
        capacity: 'Max. 130 kg',
        gearing: '8-Speed Shimano rear derailleur',
        features: 'Voice control, fingerprint start, LED dot-matrix display, haptic interaction, bluetooth music, built-in navigation, GPS tracking, OTA upgrade',
        range: '50-120 km',
        materials: '6061 aluminum with liquid forging technology.',
        sensors: 'Accelerometer, gyroscope, torque',
        motor: 'Customized rear hub, 36 V 250 W, 45 N⋅m',
        dimensions: {
            img: 'https://cdn.shopify.com/s/files/1/0633/2068/6808/files/Group_20662.svg',
            sizes: [
                ['A. Standover height', '670 mm'],
                ['B. Adjustable seat range', '80 mm'],
                ['C. Handlebar grips height', '1100-1130 mm'],
                ['D. Seat tube length', '327 mm'],
                ['E. Wheelbase', '1094 mm'],
                ['F. Overall length', '1800 mm'],
                ['G. Wheel diameter', '700 mm'],
                ['H. Top tube length (effective)', '620 mm'],
                ['I. Head tube length', '200 mm'],
                ['J. Headset height', '90-120 mm'],
            ]
        }
    }
]


function changeParameters(index, name) {
    const params = parameters.find(p => p.name === name)

    if (!params) {
        return
    }

    $('.items .params').each((i, param) => {
        const target = $(param).find('.param')[index]
        const n = target.getAttribute('name')

        // 如果img 参数
        if (n === 'img') {
            $(target).find('img').attr('src', params.img)
            $(target).find('select').val(name)

            // 默认禁用掉 对面option
            $(`.compared .params select[index="${index === '0' ? '1' : '0' }"] option`).each((i, option) => {
                option.disabled = name === option.value
            })

            return
        }

        if (n === 'dimensions') {
            $(target).find('.u14DemiBold_v2').text(name)
            $(target).find('img').attr('src', params.dimensions.img)
            $(target).find('.sizes').html(params.dimensions.sizes.map(i => {
                return `<div>
                            <span>${i[0]}</span>
                            <span>${i[1]}</span>
                        </div>`
            }))

            return
        }

        target.innerText = params[n]
    })
}

onMounted(() => {
    const select = $('.compared .params select')
    // 动态插入
    select.html(parameters.map(p => `<option value="${p.name}">${p.name}</option>`))
    // 监听select 变化
    select.on('change', e => {
        console.log(e)
        const index = e.target.getAttribute('index')
        const value = e.target.value

        changeParameters(index, value)
    })


    // 默认展示
    changeParameters('0', 'Chord')
    changeParameters('1', 'Carbon 1S')


    $('.compared .items .item i').on('click', e => {
        console.log(e.target.parentNode.parentNode)
    })

})
</script>