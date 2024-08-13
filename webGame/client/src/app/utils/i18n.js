import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      welcome: 'Welcome',
    },
  },
  lt: {
    translation: {
      welcome: 'Sveiki atvykę',
    },
  },

};

export const initializeI18n = () => {
  i18n
    .use(HttpBackend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({resources,lng: 'en',interpolation: { escapeValue: false, }, });
};

export default i18n;