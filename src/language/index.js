import { createI18n } from "vue-i18n";
import en from './en'
import de from './de'
import constans from '../constans'

export default createI18n({
    legacy: false, // 推荐用 composition API
    fallbackLocale: 'en',
    locale: constans.SHOP_LOCALE,
    messages: { en, de }
})