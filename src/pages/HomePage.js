import "../../node_modules/react-vis/dist/style.css";
import { BarChart, Legend, PieChart, AreaChart } from "react-easy-chart";

import UserDetail from "../components/UserDetail/UserDetail";
import * as React from "react";
import Notif from "../components/Notif/Notif";
import "./HomePage.css";
const HomePage = () => {
  const customStyle = {
    ".legend": {
      fontSize: "0.8em",
      maxWidth: "300px",
      padding: "12px",
      position: "absolute",
      right: "8%",
      top: "50%",
      transform: "translateY(-50%)",
    },
  };
  const pieDataCustom = [
    { key: "مردها", value: 100, color: "#2525ff" },
    { key: "زن ها", value: 200, color: "#00ac2b" },
    { key: "بچه ها", value: 50, color: "#f83816" },
  ];

  const config = [
    { color: "#2525ff" },
    { color: "#00ac2b" },
    { color: "#f83816" },
  ];
  return (
    <div className="flex">
      <div className="HomePage flex-grow flex flex-col items-stretch pr-0 pl-6 xl:pr-6 w-9/12 pt-5">
        <div className="flex justify-between">
          <h1 className="font-bold text-3xl">سلام علی</h1>
          <Notif />
        </div>
        <p>خوش اومدی!</p>
        <div className="mt-3 chart border-2 border-gray-200 rounded-md">
          <BarChart
            axisLabels={{ x: "My x Axis", y: "My y Axis" }}
            axes
            height={350}
            width={750}
            colorBars
            barWidth={40}
            xType={"time"}
            data={[
              { x: "1-Jan-20", y: 5 },
              { x: "2-Jan-20", y: 10 },
              { x: "3-Jan-20", y: 13 },
              { x: "4-Jan-20", y: 6 },
              { x: "5-Jan-20", y: 2 },
            ]}
          />
        </div>
        <div className="flex mt-3 flex-col sm:flex-row">
          <div className="w-full ml-0 mb-2 sm:mb-0 sm:ml-3 sm:w-4/6 flex items-center relative border-2 border-gray-200 rounded-md p-4">
            <div>
              <PieChart
                data={pieDataCustom}
                styles={customStyle}
                innerHoleSize={140}
                size={170}
              />
              <Legend
                data={pieDataCustom}
                dataId={"key"}
                config={config}
                styles={customStyle}
              />
            </div>
            <div className="flex flex-col flex-grow pl-4 pr-8 text-gray-600 space-y-3">
              <div className="flex justify-between">
                <div className="flex items-center space-x-2 space-x-reverse">
                  <div className="h-3 w-3 rounded-full bg-p-nav-blue"></div>
                  <p>مردها</p>
                </div>
                <span>100تومان</span>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center space-x-2 space-x-reverse">
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  <p>زن ها</p>
                </div>
                <span>200تومان</span>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center space-x-2 space-x-reverse">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <p>بچه ها</p>
                </div>
                <span>50تومان</span>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-2/6 border-2 border-gray-200 rounded-md shadow-md flex p-2">
            <div className="flex flex-col w-2/6 justify-center items-center text-center text-gray-500">
              <h3 className="text-gray-600">نرخ پاسخدهی</h3>
              <h2 className="font-bold text-xl text-black">4.5</h2>
              <p>از 5.0</p>
            </div>
            <div className="w-4/6 chart-Area flex items-stretch">
              <AreaChart
                interpolate={"cardinal"}
                areaColors={["#0112fd"]}
                data={[
                  [
                    { x: 1, y: 5 },
                    { x: 2, y: 10 },
                    { x: 3, y: 25 },
                  ],
                ]}
              />
            </div>
          </div>
        </div>
      </div>
      <UserDetail />
    </div>
  );
};

export default HomePage;
