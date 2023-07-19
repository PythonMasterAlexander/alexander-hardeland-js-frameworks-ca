import * as React from "react";
import * as Styles from "./index.styles";
import ApiCallData from "../ProductCard/ApiCallData";

function SearchProductBar() {
  const { products, isLoading, isError } = ApiCallData();
  console.log(products);

  const [inputValue, setInputValue] = React.useState<string>("");
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const userSearchInputValue = event.target.value.trim().toLowerCase();

    console.log(userSearchInputValue);
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
