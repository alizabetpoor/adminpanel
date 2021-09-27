import "./Nav.css";
import { NavLink } from "react-router-dom";
import {
  BiGridAlt,
  BiCart,
  BiPieChartAlt,
  BiPackage,
  BiPurchaseTag,
} from "react-icons/bi";
import { IoStorefrontOutline } from "react-icons/io5";
const Menu = () => {
  return (
    <div className="menu">
      <NavLink to="/" exact activeClassName="active-nav">
        <BiGridAlt title="داشبورد" />
        <span>داشبورد</span>
      </NavLink>
      <NavLink to="/orders" activeClassName="active-nav">
        <BiCart title="سفارش ها" />
        <span>سفارش ها</span>
      </NavLink>
      <NavLink to="/statistic" activeClassName="active-nav">
        <BiPieChartAlt title="آمار" />
        <span>آمار</span>
      </NavLink>
      <NavLink to="/products" activeClassName="active-nav">
        <BiPackage title="محصولات" />
        <span>محصولات</span>
      </NavLink>
      <NavLink to="/stock" activeClassName="active-nav">
        <IoStorefrontOutline title="انبار" />
        <span>انبار</span>
      </NavLink>
      <NavLink to="/discount" activeClassName="active-nav">
        <BiPurchaseTag title="تخفیف ها<" />
        <span>تخفیف ها</span>
      </NavLink>
    </div>
  );
};

export default Menu;
