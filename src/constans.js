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
const IS_USA = import.meta.env.DEV || values.domain === 'newurtopia.com'

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
    ACCESS_TOEKN: import.meta.env.VITE_MAPBOX_TOKEN,
    DEFAULT_CENTER: IS_USA ? [-117.75130, 33.62981] : [8.53121, 50.92006],
    DEFAULT_RADIUS: IS_USA ? 50 : 300,
    RADIUS_RANGE: IS_USA ? [25, 125] : [25, 400],
    MAP_SEARCH_COUNTRY: IS_USA ? 'US,CA' : 'DE,FR,NL,AT,DK,SI,BE,PL',
    MAX_BOUNDS: IS_USA ? [
        [-130, 22], // 西南角 (夏威夷附近)
        [-60, 55] // 东北角 (缅因州和五大湖上方)
    ] : [
        [-5, 42], // 西南角：接近德国与法国、瑞士边界
        [32, 57] // 东北角：德国与波兰、丹麦边界
    ],
    E_BIKES: IS_USA ? {
        9985486291192: {
            name: 'Carbon Atom',
            img: 'https://newurtopia.com/cdn/shop/files/blue5.png?v=1782383645',
        },
        9265776787704: {
            name: 'Carbon Classic',
            img: 'https://newurtopia.com/cdn/shop/files/2x_c6a96827-d3fe-421a-a8f5-4fc7067e01ad.png?v=1761903566',
        },
        9269920006392: {
            name: 'Carbon Classic ST',
            img: 'https://newurtopia.com/cdn/shop/files/0010_2x_8f9b24e3-a052-4c26-a6b9-c5d17baa6e10.png?v=1761618814',
        },
        9426496356600: {
            name: 'Carbon Fold 2',
            img: 'https://newurtopia.com/cdn/shop/files/orange_1.png?v=1772603594',
        },
        9291853070584: {
            name: 'Carbon Fold ST',
            img: 'https://newurtopia.com/cdn/shop/files/2x_ca8512a6-a3a3-40bc-a942-d54b3daa9212.png?v=1762852736',
        },
        9284230250744: {
            name: 'Carbon Joy Ultra',
            img: 'https://newurtopia.com/cdn/shop/files/2x_1e2ac95f-d62c-4de1-956f-f74269323d08.png?v=1762497210',
        },
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
        15404337955191: {
            name: 'Carbon 1 ST',
            img: 'https://newurtopia.com/cdn/shop/files/0010_2x_27cc3523-d64a-41cd-be79-9a7f4e596b85.png?v=1757400825',
        },
        15404337987959: {
            name: 'Carbon Fold 2',
            img: 'https://cdn.shopify.com/s/files/1/0583/5810/4213/files/orange_1.png?v=1772603594'
        },
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
        // 4: {
        //     name: 'Free Assembly',
        //     icon: Svg19634,
        // },
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