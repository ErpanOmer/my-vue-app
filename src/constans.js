import Svg19630 from '@/assets/19630.svg'
import Svg19631 from '@/assets/19631.svg'
import Svg19632 from '@/assets/19632.svg'
import Svg19633 from '@/assets/19633.svg'
import Svg19634 from '@/assets/19634.svg'

export default {
    IS_MOBILE: /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent) || ('ontouchstart' in window && navigator.maxTouchPoints > 0),
    IS_DEV: import.meta.env.DEV,
    ACCESS_TOEKN: 'pk.eyJ1IjoiZXJwYW5vbWVyIiwiYSI6ImNtODN2M3lzNjBsc24yanI0Y3FkNXo5aDYifQ.9g2y8zRNHFfPTqfaXIWxCg',
    DEFAULT_CENTER: [-118.00130, 33.82981],
    DEFAULT_RADIUS: 20,
    E_BIKES: {
        8792002461944: {
            name: 'Carbon Fold 1',
            img: 'https://newurtopia.com/cdn/shop/files/20241022-144851.png?v=1729579789',
        },
        8922206961912: {
            name: 'Carbon 1 ST',
            img: 'https://newurtopia.com/cdn/shop/files/0010.png?v=1737363451',
        },
        8794812776696: {
            name: 'Fusion GT',
            img: 'https://newurtopia.com/cdn/shop/files/19566.png?v=1729236036',
        },

        8230663028984: {
            name: 'Carbon 1 Pro',
            img: 'https://newurtopia.com/cdn/shop/products/collectionblack.png?v=1703557822',
        },
        7902779474168: {
            name: 'Carbon 1/1s',
            img: 'https://newurtopia.de/cdn/shop/files/1sb_b90f667e-42ce-4987-8784-4040af3a37a3.png?v=1695624132',
        },
        7948552077560: {
            name: 'Chord/ChordX',
            img: 'https://cdn.shopify.com/s/files/1/0633/2068/6808/files/Mask_Group_18754.png?v=1689236445',
        }
    },
    SERVICES: {
        1: {
            name: 'Premium Dealer',
            icon: Svg19630
        },
        2: {
            name: 'Standard Dealer',
            icon: Svg19631
        },
        3: {
            name: 'Test Ride',
            icon: Svg19632
        },
        4: {
            name: 'Free Assembly',
            icon: Svg19633
        },
        5: {
            name: 'Service',
            icon: Svg19634
        }
    },
    THEME: {
        token: {
            colorPrimary: '#111',
            colorBgElevated: '#111',
            colorFillTertiary: '#E8E8E8',
            colorLink: '#222',
            colorLinkHover: '#444',
            colorLinkActive: '#000',
            fontFamily: `"Helvetica Now Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, Helvetica Neue, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`
        },
        components: {
            Select: {
                colorPrimary: '#ff4d4f',
                colorBgElevated: '#fff',
                controlItemBgActive: '#e6f4ff'
            },
            Popover: {
                colorTextHeading: '#111',
                colorPrimary: '#111',
                colorBgElevated: '#eee',
            },
            Modal: {
                colorBgElevated: '#fff',
            },
            Calendar: {
                colorPrimary: '#ff4d4f',
                colorBgElevated: '#fff'
            }
        }
    },
    WEEK: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
}


// {
//     "Fusion": 8286206230744,
//     "Carbon 1 Pro": 8128883720408,
//     "Carbon 1/1s": 7633738727640,
//     "Chord/ChordX": 7952778658008
// }