import React, { useState } from "react";
import { changeLang } from "../../App";
import { useTranslation } from "react-i18next";

const Languages = () => {
  const currentLang = localStorage.getItem("lang");
  const [language, setLanguage] = useState(currentLang ? currentLang : "uz");
  const { t } = useTranslation("translation", { keyPrefix: "Language" });
  return (
    <div className="p-4 flex items-center w-60">
      <i className="fa fa-globe"></i>
      <select
        value={language}
        onChange={(e) => {
          changeLang(e.target.value);
          setLanguage(e.target.value);
        }}
        className=" py-2 px-1 font-bold text-white tracking-wider bg-[#0b3759] border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value={"uz"}>{t("0")}</option>
        <option value={"ru"}>{t("1")}</option>
        <option value={"en"}>{t("2")}</option>
      </select>
    </div>
  );
};

export default Languages;
