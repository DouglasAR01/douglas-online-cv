import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import English from "../langs/en.json";
import Spanish from "../langs/es.json";

const resources: any = {
  en: English,
  es: Spanish,
};

const DEFAULT_LANG: string = "en";
const locale: string = navigator.language.split("-")[0];

export const availableLangs: { [key: string]: string } = {};
for (const langKey in resources) {
  availableLangs[langKey] = resources[langKey]["flag"];
}

let lang: string = locale in availableLangs ? locale : DEFAULT_LANG;

i18n.use(initReactI18next).init({
  resources,
  lng: lang,
});

export default i18n;
