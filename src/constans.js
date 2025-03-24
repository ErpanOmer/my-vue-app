import Svg19630 from '@/assets/19630.svg'
import Svg19631 from '@/assets/19631.svg'
import Svg19632 from '@/assets/19632.svg'
import Svg19633 from '@/assets/19633.svg'
import Svg19634 from '@/assets/19634.svg'

export default {
    IS_DEV: import.meta.env.DEV,
    ACCESS_TOEKN: 'pk.eyJ1IjoiZXJwYW5vbWVyIiwiYSI6ImNtODN2M3lzNjBsc24yanI0Y3FkNXo5aDYifQ.9g2y8zRNHFfPTqfaXIWxCg',
    DEFAULT_CENTER: [-118.00130, 33.82981],
    E_BIKES: {
        8792002461944: 'Carbon Fold 1',
        8922206961912: 'Carbon 1 ST',
        8794812776696: 'Fusion GT',
        8230663028984: 'Carbon 1 Pro',
        7902779474168: 'Carbon 1/1s',
        7948552077560: 'Chord/ChordX'
    },
    SERVICES: [{
            name: 'Premium Dealer',
            icon: Svg19630
        },
        {
            name: 'Standard Dealer',
            icon: Svg19631
        },
        {
            name: 'Test Ride',
            icon: Svg19632
        },
        {
            name: 'Free Assembly',
            icon: Svg19633
        },
        {
            name: 'Service',
            icon: Svg19634
        }
    ],
    THEME: {
        token: {
            colorPrimary: '#111',
            colorBgElevated: '#111',
            colorFillTertiary: '#E8E8E8',
            colorLink: '#222',
            colorLinkHover: '#444',
            colorLinkActive: '#000'
        },
        components: {
            Select: {
                colorBgElevated: '#fff',
            },
            Popover: {
                colorTextHeading: '#111',
                colorPrimary: '#111',
                colorBgElevated: '#eee',
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