import Nav from "../components/Nav/Nav";
import NavMobile from "../components/Nav/NavMobile";
const Layout = ({ children }) => {
  return (
    <>
      <NavMobile />
      <Nav />
      {children}
    </>
  );
};

export default Layout;
