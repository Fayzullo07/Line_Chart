import React from "react";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation("translation", { keyPrefix: "Global" });
  return (
    <div className=" flex justify-between p-1 py-4">
      <div>
        <p className="text-gray-400 ">Google Company</p>
        <h2 className="text-[30px] tracking-widest  font-bold text-sm my-1">
          Fakhiyor
        </h2>
      </div>

      <div className=" flex justify-between gap-2">
        <div>
          <select className="py-2 px-1 font-bold tracking-wider bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option>
              {t("9")} 7 {t("10")}
            </option>
            <option>
              {t("9")} 30 {t("10")}
            </option>
            <option>
              {t("9")} 365 {t("10")}
            </option>
          </select>
        </div>
        <div>
          <select className="py-2 px-1 font-bold tracking-wider bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option>
              {t("2")} {t("3")}
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Header;
