import { BiBarChartAlt2, BiTime, BiUserPlus } from "react-icons/bi";
import { Link } from "react-router-dom";
import * as React from "react";
import "./UserDetail.css";
import userphoto from "../../assets/images/user.JPG";
import SearchBox from "../SearchBox/SearchBox";
import ProfileMenu from "../ProfileMenu/ProfileMenu";

const UserDetail = () => {
  return (
    <section className="userdetail z-10 bg md:block hidden pt-5 flex-grow bg-white h-full overflow-x-hidden overflow-y-hidden border-r-2 border-p-gray">
      <div className="xl:px-6 px-3 space-y-6">
        <div className="flex justify-between items-center">
          <ProfileMenu />
          <SearchBox />
        </div>
        <div className="flex flex-col items-center space-1-2">
          <div className="profile-pic relative">
            <img className="h-28 w-28 rounded-md" src={userphoto} alt="" />
          </div>
          <h1 className="mt-2 font-extrabold text-2xl">علی ضابط پور</h1>
          <p>ali_0_zabetpoor@ymail.com</p>
          <span className="px-6 text-sm rounded-md level-badge mt-1 font-sans">
            level 2
          </span>
        </div>
        <div className="info-products-container bg-p-gray-box flex justify-around py-5 rounded-md">
          <div>
            <span>1000</span>
            <p>سفارش</p>
          </div>
          <div>
            <span>3000</span>
            <p>محصولات</p>
          </div>
          <div>
            <span>120000تومان</span>
            <p>درآمد</p>
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <div className="flex justify-start space-x-5 space-x-reverse h-16">
            <div className="bg-p-gray-box px-5 self-stretch flex justify-center items-center rounded-md text-p-nav-blue">
              <BiBarChartAlt2 className="text-3xl" />
            </div>
            <div className="flex flex-col justify-around">
              <div className="flex space-x-2 space-x-reverse font-bold">
                <span className="text-lg">80.40تومان</span>
                <span className="text-p-orange">2.5%</span>
              </div>
              <div>
                <span className="text-gray-600">میانگین فروش هفتگی</span>
              </div>
            </div>
          </div>
          <div className="flex justify-start space-x-5 space-x-reverse h-16">
            <div className="bg-p-gray-box px-5 self-stretch flex justify-center items-center rounded-md text-p-nav-blue">
              <BiTime className="text-3xl" />
            </div>
            <div className="flex flex-col justify-around">
              <div className="flex space-x-2 space-x-reverse font-bold">
                <span className="text-lg">19دقیقه</span>
                <span className="text-p-orange">4.5%</span>
              </div>
              <div>
                <span className="text-gray-600">میانگین سفارش</span>
              </div>
            </div>
          </div>
          <div className="flex justify-start space-x-5 space-x-reverse h-16">
            <div className="bg-p-gray-box px-5 self-stretch flex justify-center items-center rounded-md text-p-nav-blue">
              <BiUserPlus className="text-3xl" />
            </div>
            <div className="flex flex-col justify-around">
              <div className="flex space-x-2 space-x-reverse font-bold">
                <span className="text-lg">25</span>
                <span className="text-p-orange">1.5%</span>
              </div>
              <div>
                <span className="text-gray-600">مشتری جدید</span>
              </div>
            </div>
          </div>
        </div>
        <div className="update-bar flex flex-col space-y-1">
          <div className="progressbar rounded-full">
            <progress className="rounded-full" value="33" max="100">
              33%
            </progress>
          </div>
          <div className="flex justify-between text-sm">
            <p className="text-gray-400">33% کامل شده</p>
            <Link to="/" className="text-p-nav-blue">
              آپدیت کنید
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserDetail;
