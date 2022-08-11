import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";

import translationES from "./languages/es.json";
import translationEN from "./languages/en.json";

const fallbackLng = ["es"];
const availableLanguages = ["es", "en"];

const resources = {
    es: {
        translation: translationES,
    },
    en: {
        translation: translationEN,
    },
};

i18n.use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng,
        detection: {
            checkWhitelist: true,
        },
        debug: false,
        whitelist: availableLanguages,
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
