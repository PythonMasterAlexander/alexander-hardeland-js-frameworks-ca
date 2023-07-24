import * as React from "react";

export const [filterValue, setFilterValue] = React.useState<string>("");

const HandleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  // When ever the user write someting in the input field, the value will be set in the filter state
  setFilterValue(event.target.value.trim().toLowerCase());
};
export default HandleInputChange;
