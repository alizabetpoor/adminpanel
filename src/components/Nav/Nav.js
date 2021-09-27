import Menu from "./Menu";
import "./Nav.css";
import "./Menu.css";
const Nav = () => {
  return (
    <section className="menu-bar z-30 bg-p-nav-blue min-w-min xl:w-2/12 flex text-p-gray fixed right-0 top-0 h-full flex-col py-10 items-center justify-between">
      <div className="text-white font-bold text-2xl hidden xl:block">
        <h3>پنل ادمین</h3>
      </div>

      <nav className="hidden lg:static lg:flex lg:flex-col pr-4 space-y-2 self-stretch">
        <Menu />
      </nav>
      <div className="social-media hidden xl:block">
        <ul className="grid grid-cols-1 underline gap-2 xl:grid-cols-3">
          <li>
            <a href="http://google.com">facebook</a>
          </li>
          <li>
            <a href="http://google.com">twitter</a>
          </li>
          <li>
            <a href="http://google.com">google</a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Nav;
