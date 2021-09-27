import SearchBox from "../components/SearchBox/SearchBox";
import ProfileMenu from "../components/ProfileMenu/ProfileMenu";
import Notif from "../components/Notif/Notif";
import * as React from "react";
import {
  BiChevronDown,
  BiCog,
  BiRadioCircle,
  BiChevronLeft,
  BiChevronRight,
} from "react-icons/bi";
import TextField from "@mui/material/TextField";
import AdapterJalali from "@date-io/date-fns-jalali";
import LocalizationProvider from "@material-ui/lab/LocalizationProvider";
import { DatePicker } from "@material-ui/lab";
import "./OrderPage.css";
import { useState } from "react";
import { Link } from "react-router-dom";
const OrderPage = () => {
  const [dateValue, setDateValue] = React.useState(new Date());
  const [activeTab, setActiveTab] = useState(1);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const handleOrderClick = (idorder) => {
    if (idorder !== selectedOrder) {
      setSelectedOrder(idorder);
    } else {
      setSelectedOrder(null);
    }
  };
  const status = (stat) => {
    let statusText = "";
    if (stat === "pending") {
      statusText = "در حال پردازش";
    } else if (stat === "ordered") {
      statusText = "ثبت شده";
    } else if (stat === "completed") {
      statusText = "کامل شده";
    }

    return (
      <>
        <BiRadioCircle
          className={`${
            stat === "pending" ? "text-red-600" : "text-green-600"
          }`}
        />
        <p>{statusText}</p>
      </>
    );
  };
  const orders = [
    {
      id: 412,
      name: "علی ضابط پور",
      address: "ایران-تهران-میدان انقلاب",
      date: "02 تیر 1400",
      price: 24000,
      status: "pending",
    },
    {
      id: 321,
      name: "علی ضابط پور",
      address: "ایران-تهران-میدان انقلاب",
      date: "02 تیر 1400",
      price: 24000,
      status: "ordered",
    },
    {
      id: 31,
      name: "علی ضابط پور",
      address: "ایران-تهران-میدان انقلاب-دست راست-مغازه اول",
      date: "02 تیر 1400",
      price: 24000,
      status: "completed",
    },
    {
      id: 521,
      name: "علی ضابط پور",
      address: "ایران-تهران-میدان انقلاب-دست راست-مغازه اول",
      date: "02 تیر 1400",
      price: 24000,
      status: "completed",
    },
  ];
  const tabs = [
    { id: 1, name: "همه سفارشات" },
    { id: 2, name: "ثبت شده" },
    { id: 3, name: "در حال پردازش" },
    { id: 4, name: "کامل شده" },
  ];
  const handleTabClick = (id) => {
    setActiveTab(id);
  };
  return (
    <div className="orderpage flex flex-col items-stretch h-full pt-5 w-full px-3 overflow-x-hidden">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h1 className="font-black text-3xl">سفارشات</h1>
          <p className="text-gray-500">27سفارش موجود است</p>
        </div>
        <div className="flex items-center space-x-2 space-x-reverse">
          <Notif />
          <div className="hidden md:flex">
            <SearchBox />
            <ProfileMenu />
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 justify-between mt-8 lg:items-center items-start">
        <div>
          <ul className="filter-orders flex space-x-4 space-x-reverse text-gray-400 font-medium ">
            {tabs.map((item) => {
              return (
                <li
                  className={`${activeTab === item.id ? "active-tab" : null}`}
                  key={item.id}
                  onClick={() => handleTabClick(item.id)}
                >
                  {item.name}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex items-center space-x-2 space-x-reverse md:w-6/12 lg:w-4/12">
          <LocalizationProvider dateAdapter={AdapterJalali}>
            <DatePicker
              mask="____/__/__"
              value={dateValue}
              onChange={(newValue) => setDateValue(newValue)}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <span>تا</span>
          <LocalizationProvider dateAdapter={AdapterJalali}>
            <DatePicker
              mask="____/__/__"
              value={dateValue}
              onChange={(newValue) => setDateValue(newValue)}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </div>
      </div>
      <div className="list-orders flex flex-col mt-4 ">
        <div className="header-list-orders bg-gray-100 font-semibold rounded-md px-4 py-3">
          <ul className="flex md:flex-nowrap flex-wrap">
            <li>آیدی</li>
            <li className="name">نام</li>
            <li className="address">آدرس</li>
            <li className="pr-4">تاریخ</li>
            <li>قیمت</li>
            <li>وضعیت</li>
            <li>عملیات</li>
          </ul>
        </div>
        <div className="body-list-orders mt-4 space-y-4">
          {orders.map((order) => {
            return (
              <ul
                key={order.id}
                className={`${
                  selectedOrder === order.id ? "active-order" : null
                } flex md:flex-nowrap flex-wrap rounded-md border-2 items-center border-gray-200 px-4 py-3`}
              >
                <li onClick={() => handleOrderClick(order.id)}>{order.id}#</li>
                <li className="name">{order.name}</li>
                <li className="address">{order.address}</li>
                <li className="pr-4">{order.date}</li>
                <li>{order.price}تومان</li>
                <li className="flex items-center">{status(order.status)}</li>
                <li className="flex space-x-2 space-x-reverse operations">
                  <div className="p-2 bg-p-gray-box rounded-md cursor-pointer">
                    <BiCog className="text-lg" />
                  </div>
                  <div className="p-2 bg-p-gray-box rounded-md cursor-pointer">
                    <BiChevronDown className="text-lg" />
                  </div>
                </li>
              </ul>
            );
          })}
        </div>
        <div className="pagination flex self-end space-x-3 space-x-reverse mt-2 ml-3 items-center">
          <BiChevronRight className="text-lg cursor-pointer" />
          <ul className="flex space-x-4 space-x-reverse text-gray-300">
            <Link to="/">1</Link>
            <Link className="active-pagination" to="/">
              2
            </Link>
            <Link to="/">3</Link>
            <Link to="/">4</Link>
            <Link to="/">5</Link>
          </ul>
          <BiChevronLeft className="text-lg cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
