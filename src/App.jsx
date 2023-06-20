import Pages from "./layout/Pages";

// LANGUAGES
import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import tUz from "./languages/uz/transaltion.json";
import tRu from "./languages/ru/transaltion.json";
import tEn from "./languages/en/transaltion.json";
import { useEffect } from "react";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      uz: {
        translation: tUz,
      },
      ru: {
        translation: tRu,
      },
      en: {
        translation: tEn,
      },
    },
    lng: "uz", // if you're using a language detector, do not define the lng option
    fallbackLng: "uz",

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

export const changeLang = (l) => {
  i18n.changeLanguage(l);
  localStorage.setItem("lang", l);
  return;
};

function App() {
  useEffect(() => {
    const currentLang = localStorage.getItem("lang");
    i18n.changeLanguage(currentLang);
  }, []);
  return (
    <>
      <Pages />
    </>
  );
}

export default App;
