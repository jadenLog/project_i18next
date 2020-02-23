import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import intervalPlural from 'i18next-intervalplural-postprocessor';
import moment from 'moment';

import translationKO from './locale/ko.json';
import translationEN from './locale/en.json';

const resources = {
    ko: {
        translation: translationKO,
    },
    en: {
        translation: translationEN,
    },
};

intervalPlural.setOptions({
    intervalSeparator: ';',
    intervalRegex: /^\((\S*)\){(.*)}$/,
    intervalSuffix: '_interval',
});

i18n.use(intervalPlural).use(initReactI18next).init({
    debug: true,
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
        format: (value, format) => {
            if (format === 'uppercase') return value.toUpperCase();
            if (value instanceof Date) return moment(value).format(format);
            return value;
        },
    },
});

export default i18n;