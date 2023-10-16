import * as React from "react";
export const [hamburgerOpen, setHamburgerOpen] = React.useState(false);
function toggleHamburgerOnOff() {
  setHamburgerOpen(true);
}
export default toggleHamburgerOnOff;
