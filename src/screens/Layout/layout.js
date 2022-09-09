import Header from "../../components/Header/header";

import "./layout.css";

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <Header />

      <main>{children}</main>
    </div>
  );
};

export default Layout;
