import React from "react";
import { cards } from "../../api/data";
import CountUp from "react-countup";
import { useTranslation } from "react-i18next";
const Cards = () => {
  const { t } = useTranslation("translation", { keyPrefix: "Home" });
  return (
    <div>
      <div class="grid grid-cols-1 gap-4 md:grid-cols-5">
        {cards.map((card, index) => (
          <div className="flex justify-start items-center p-4 rounded-lg bg-white px-4 hover:scale-105 hover:drop-shadow-xl ease-in duration-300">
            <div className=" w-12 border rounded-full">
              <img
                src={card.img}
                alt="Image"
                className=" object-contain rounded-full"
              />
            </div>
            <div className="px-2">
              {index == 3 ? (
                <b className=" text-[22px] font-bold">
                  <CountUp
                    start={0}
                    end={card.count}
                    duration={index + 2}
                    delay={0}
                  />
                  %
                </b>
              ) : (
                <b className=" text-[22px] font-bold">
                  <CountUp
                    start={0}
                    end={card.count}
                    duration={index + 2}
                    delay={0}
                  />
                </b>
              )}
              <p className="text-gray-400">{t(`${index}`)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
