import React from "react";
import { table } from "../../api/data";
import CountUp from "react-countup";
import { useTranslation } from "react-i18next";

const Table = () => {
  const { t } = useTranslation("translation", { keyPrefix: "Home" });
  const { t: l } = useTranslation("translation", { keyPrefix: "Global" });
  return (
    <div className=" w-full bg-white px-2 rounded-lg ">
      <h2 className=" font-bold text-[24px] tracking-widest py-3 px-2">
        {l("0")}
      </h2>

      <ul class=" flex flex-col gap-2 overflow-y-auto max-h-60">
        {table.map((item, index) => (
          <li class=" border bg-[#fafcfe] rounded-2xl py-2 hover:drop-shadow-xl hover:duration-300 hover:ease-in">
            <div class="flex items-center space-x-4">
              <div class="flex-shrink-0">
                <div className="px-2  font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center">
                  <img
                    className="w-14 h-14 rounded-2xl border"
                    src={item.img}
                    alt="Jese image"
                  />
                  <div className="pl-3 w-40">
                    <div className="text-base font-bold">
                      {item.name.length > 15 ? (
                        <span>{item.name.substring(0, 15)}...</span>
                      ) : (
                        item.name
                      )}
                    </div>
                    <div className="font-normal text-gray-500">{l("4")}</div>
                  </div>
                </div>
              </div>
              <div class="flex-1 min-w-0">
                <div className="text-base font-bold">
                  <CountUp
                    start={0}
                    end={item.price}
                    duration={index + 2}
                    delay={0}
                  />{" "}
                  UZS
                </div>
                <div className="font-normal text-gray-500">{l("5")}</div>
              </div>
              <div class="flex-1 items-center text-base font-semibold text-gray-900 dark:text-white">
                <div className="flex items-center">
                  {item.status == 0 ? (
                    <div className="rounded-lg bg-[#fce1e1] mr-2 text-[#c76a6a] px-3 py-1">
                      {l("8")} <i className="fa fa-circle-info"></i>
                    </div>
                  ) : item.status == 1 ? (
                    <div className="rounded-lg bg-[#f8f2d6] mr-2 text-[#c9ad6d] px-3 py-1">
                      {l("7")} <i className="fa fa-circle-info"></i>
                    </div>
                  ) : (
                    <div className="rounded-lg bg-[#d6f8df] mr-2 text-[#61c37b] px-3 py-1">
                      {l("6")}
                    </div>
                  )}
                </div>
              </div>
              <div className="px-2 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center border-r-2">
                <img
                  className="w-8 h-8 rounded-full border"
                  src="https://png.pngtree.com/png-vector/20220518/ourmid/pngtree-click-arrow-background-business-button-png-image_4620621.png"
                  alt="Jese image"
                />
                <div className="pl-3 ">
                  <div className="text-base font-bold">
                    <CountUp
                      start={0}
                      end={item.count1}
                      duration={index + 2}
                      delay={0}
                    />
                  </div>
                  <div className="font-normal text-gray-500">{t("0")}</div>
                </div>
              </div>

              <div className="px-2 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center">
                <img
                  className="w-8 h-8 rounded-full border"
                  src="https://png.pngtree.com/png-vector/20220518/ourmid/pngtree-click-arrow-background-business-button-png-image_4620621.png"
                  alt="Jese image"
                />
                <div className="pl-3">
                  <div className="text-base font-bold">
                    <CountUp
                      start={0}
                      end={item.count2}
                      duration={index + 2}
                      delay={0}
                    />
                  </div>
                  <div className="font-normal text-gray-500"> {t("2")}</div>
                </div>
              </div>

              <div className="px-2 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center border-x-2">
                <img
                  className="w-8 h-8 rounded-full border"
                  src="https://png.pngtree.com/png-vector/20220518/ourmid/pngtree-click-arrow-background-business-button-png-image_4620621.png"
                  alt="Jese image"
                />
                <div className="pl-3">
                  <div className="text-base font-bold">
                    <CountUp
                      start={0}
                      end={item.count3}
                      duration={index + 2}
                      delay={0}
                    />
                    %
                  </div>
                  <div className="font-normal text-gray-500">{t("3")}</div>
                </div>
              </div>

              <div className="px-2 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center">
                <img
                  className="w-8 h-8 rounded-full border"
                  src="https://png.pngtree.com/png-vector/20220518/ourmid/pngtree-click-arrow-background-business-button-png-image_4620621.png"
                  alt="Jese image"
                />
                <div className="pl-3">
                  <div className="text-base font-bold">
                    <CountUp
                      start={0}
                      end={item.count4}
                      duration={index + 2}
                      delay={0}
                    />{" "}
                    UZS
                  </div>
                  <div className="font-normal text-gray-500">{t("4")}</div>
                </div>
              </div>

              <div className="px-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center cursor-wait">
                ...
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Table;
