import * as React from "react";
export const [filterValue, setFilterValue] = React.useState<string>("");
const HandleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setFilterValue(event.target.value.trim().toLowerCase());
};
export default HandleInputChange;
