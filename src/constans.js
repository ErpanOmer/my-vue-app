import Svg19630 from '@/assets/19630.svg'
import Svg19631 from '@/assets/19631.svg'
import Svg19632 from '@/assets/19632.svg'
import Svg19633 from '@/assets/19633.svg'
import Svg19634 from '@/assets/19634.svg'
import {
    getSearchValues
} from '@/tools.js'

const values = getSearchValues()
//Urtopia (DE)&shop_url=https://newurtopia.de&locale=en&domain=newurtopia.de&currency=EUR&language=en&country=DE

const IS_MOBILE = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent) || ('ontouchstart' in window && navigator.maxTouchPoints > 0);
const IS_USA = values.domain === 'newurtopia.com'

console.log(values)

export default {
    SHOP_NAME: values.shop_name || 'Urtopia (US)',
    SHOP_URL: values.shop_url || 'https://newurtopia.com',
    SHOP_CURRENCY: values.currency || 'USD',
    SHOP_DOMAIN: values.domain || 'newurtopia.com',
    SHOP_LOCALE: values.locale || 'en',
    SHOP_LANGUAGE: values.language || 'en',
    SHOP_COUNTRY: values.country || 'US',
    IS_MOBILE,
    IS_USA,
    IS_DEV: import.meta.env.DEV,
    IS_IFRAME: window.top !== window.self,
    ACCESS_TOEKN: 'pk.eyJ1IjoiZXJwYW5vbWVyIiwiYSI6ImNtODN2M3lzNjBsc24yanI0Y3FkNXo5aDYifQ.9g2y8zRNHFfPTqfaXIWxCg',
    DEFAULT_CENTER: IS_USA ? [-117.75130, 33.62981] : [8.53121, 50.92006],
    DEFAULT_RADIUS: IS_USA ? 50 : 300,
    RADIUS_RANGE: IS_USA ? [25, 125] : [100, 400],
    MAP_SEARCH_COUNTRY: IS_USA ? 'US,CA' : 'DE,FR,NL,AT,DK,SI,BE,PL',
    MAX_BOUNDS: IS_USA ? [
        [-130, 22], // 西南角 (夏威夷附近)
        [-60, 55] // 东北角 (缅因州和五大湖上方)
    ] : [
        [-5, 42], // 西南角：接近德国与法国、瑞士边界
        [32, 57] // 东北角：德国与波兰、丹麦边界
    ],
    E_BIKES: IS_USA ? {
        9062953025784: {
            name: 'Fusion Pro',
            img: 'https://cdn.shopify.com/s/files/1/0583/5810/4213/files/2x_08516587-73d8-48be-8491-4b067ab10446.png?v=1747203272'
        },
        9029881561336: {
            name: 'Carbon Joy',
            img: 'https://cdn.shopify.com/s/files/1/0583/5810/4213/files/f_c5c87820-9d26-491d-ba5f-5e70fe8725d2.png?v=1745560603',
        },
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
            img: 'https://newurtopia.com/cdn/shop/files/19564.png?v=1729236036',
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
    } : {
        8286206230744: {
            name: 'Fusion',
            img: 'https://newurtopia.de/cdn/shop/files/MaskGroup18890.png?v=1713519830'
        },
        8128883720408: {
            name: 'Carbon 1 Pro',
            img: 'https://newurtopia.de/cdn/shop/files/collectionblack.png?v=1703557889'
        },
        7633738727640: {
            name: 'Carbon 1/1s',
            img: 'https://newurtopia.de/cdn/shop/files/1sb_b90f667e-42ce-4987-8784-4040af3a37a3.png?v=1695624132',
        },
        7952778658008: {
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
            icon: Svg19633
        },
        4: {
            name: 'Free Assembly',
            icon: Svg19634,
        },
        5: {
            name: 'Service',
            icon: Svg19632
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