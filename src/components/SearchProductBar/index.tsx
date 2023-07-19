import * as React from "react";
import * as Styles from "./index.styles";
import { handleInputChange } from "../ProductCard";

function SearchProductBar() {
  return (
    <>
      <section>
        <Styles.Input onChange={handleInputChange} />
        <button>Search</button>
      </section>
    </>
  );
}
export default SearchProductBar;
