import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import { data, options } from "../../api/data";
import { useTranslation } from "react-i18next";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const Chart = () => {
  const { t } = useTranslation("translation", { keyPrefix: "Home" });
  const { t: l } = useTranslation("translation", { keyPrefix: "Global" });

  return (
    <div className=" w-full  bg-white rounded-lg">
      <div className="flex justify-between items-center p-2">
        <div className="flex items-center gap-3">
          <h1 className=" text-[28px] font-bold tracking-widest text-gray-700">
            {l("1")}
          </h1>
          <span className="h-3 w-3 bg-[#ffc700] rounded-full"></span>
          <p className="text-gray-400">{t("0")}</p>

          <span className="h-3 w-3 bg-[#8c16d4] rounded-full"></span>
          <p className="text-gray-400">{t("1")}</p>

          <span className="h-3 w-3 bg-[#169bd4] rounded-full"></span>
          <p className="text-gray-400">{t("2")}</p>
        </div>
        <div>
          <div>
            <select className=" bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 font-bold tracking-wider dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option>{l("2")}</option>
            </select>
          </div>
        </div>
      </div>
      <div>
        <Line width={1200} height={250} data={data} options={options}></Line>
      </div>
    </div>
  );
};

export default Chart;
