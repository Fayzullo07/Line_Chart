import React from "react";
import CountUp from "react-countup";
import Languages from "./Languages";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation("translation", { keyPrefix: "Navbar" });
  return (
    <div className="bg-[#0b3759] h-screen text-white flex flex-col justify-between">
      <div className="text-white">
        <div className="p-4">
          <div className="p-2 bg-[#234b6a]/[0.9] rounded-2xl font-medium text-gray-900 whitespace-nowrap dark:text-white flex justify-between items-center mb-4">
            <img
              className="w-12 h-12 rounded-full"
              src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
              alt="Jese image"
            />
            <div className="pl-3 flex-1">
              <div className="text-base font-semibold text-gray-100 tracking-wide">
                Eshonov Fakhiyor
              </div>
              <div className="font-normal text-gray-300 text-[12px]">
                Google Company
              </div>
            </div>
            <i className="fa fa-angle-right text-gray-300"></i>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4 p-4">
          <div>
            <p className="text-[12px] text-gray-300">{t("3")}</p>
            <b className="font-bold text-[22px] tracking-wider">
              <CountUp start={0} end={10000000} duration={7} delay={0} /> UZS
            </b>
          </div>
          <i className="fa fa-add p-4 rounded-lg bg-[#169bd4] hover:shadow-2xl hover:scale-110 transition"></i>
        </div>

        <div className="p-4 mb-4">
          <div className="bg-[#0a2840] flex justify-between items-center p-1.5 rounded-full">
            <button className="bg-[#169bd4] p-2 w-1/2 rounded-3xl">
              {t("4")}
            </button>
            <button className="hover:bg-[#169bd4] p-2 w-1/2 rounded-3xl">
              {t("5")}
            </button>
          </div>
        </div>

        <div className=" mb-4 p-4">
          <button className="flex items-center justify-center bg-[#169bd4] p-2 rounded-lg w-full hover:shadow-2xl hover:scale-105 transition">
            <i className="fa fa-add"></i>
            <h2 className="mx-3 tracking-widest">
              {t("4")} {t("6")}
            </h2>
          </button>
        </div>

        <div>
          <div className="flex flex-col">
            <a className="flex items-center active p-3">
              <i className="fa fa-list px-1"></i>
              <p className="px-3">{t("0")}</p>
            </a>

            <a className="flex items-center hover:bg-[#0c4165] hover:border-r-[6px] hover:border-[#169bd4] p-3">
              <i className="fa fa-circle-info"></i>
              <p className="px-3">{t("1")}</p>
            </a>
            <a className="flex items-center hover:bg-[#0c4165] hover:border-r-[6px] hover:border-[#169bd4] p-3">
              <i className="fa fa-arrow-right-from-bracket"></i>
              <p className="px-3">{t("2")}</p>
            </a>
          </div>
        </div>
      </div>

      <Languages />
    </div>
  );
};

export default Navbar;
