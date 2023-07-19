import * as React from "react";
import * as Styles from "./index.styles";

export const handleInputChange = (
  event: React.ChangeEvent<HTMLInputElement>
) => {
  const userSearchInputValue = event.target.value.trim().toLowerCase();
};

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
