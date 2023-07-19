import * as React from "react";
import * as Styles from "./index.styles";
function SearchProductBar() {
  const [inputValue, setInputValue] = React.useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const userSearchInputValue = event.target.value.trim().toLowerCase();
  };

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
