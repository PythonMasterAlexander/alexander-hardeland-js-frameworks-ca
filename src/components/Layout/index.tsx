import * as React from "react";
import * as Styles from "./index.styles";
import Header from "../Header";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <React.Fragment>
      <Header />
      <Styles.Main>
        <Outlet />
      </Styles.Main>
      <Footer />
    </React.Fragment>
  );
}
export default Layout;
