import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import Chart from "../components/Chart/Chart";
import Table from "../components/Table/Table";
import Cards from "../components/Cards/Cards";

const Pages = () => {
  return (
    <div className="flex justify-between items-center h-screen bg-gray-50 overflow-y-hidden">
      <div className="w-1/6">
        <Navbar />
      </div>

      <div className=" w-5/6 h-screen px-2">
        <div className="h-2/10">
          <Header />
        </div>
        <div className="h-2/10 mb-4">
          <Cards />
        </div>
        <div className=" w-full h-3/10 mb-4">
          <Chart />
        </div>
        <div className=" w-full h-3/10 ">
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Pages;
