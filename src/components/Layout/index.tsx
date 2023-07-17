import * as Styles from "./index.styles";

import Header from "../Header";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
export default Layout;
