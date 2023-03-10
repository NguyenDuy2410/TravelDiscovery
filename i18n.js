import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// import detector from "i18next-browser-languagedetector";

import CONSTANTSEN from "./locales/en/translationEN.json";
import CONSTANTSVN from "./locales/vi/translationVN.json";

export const locales = {
    vn: "Tiếng Việt",
    en: "English",
};
const resources = {
    en: {
        common: CONSTANTSEN,
    },
    vn: {
        common: CONSTANTSVN,
    },
};
const defaultNS = "common";
i18n.use(initReactI18next).init({
    resources,
    ns: ["common"],
    lng: "vn",
    fallbackLng: "vn", // use en if detected lng is not available
    interpolation: {
        escapeValue: false, // react already safes from xss
    },
});

export default i18n;
