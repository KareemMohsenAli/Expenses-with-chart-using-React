import React, { useState } from "react";

export default function ExpenseFilter({ onChangeFilter,Filter }) {
  //   const [filter, setfilter] = useState("");

  const dropdownChangeHandler = (e) => {
    onChangeFilter(e.target.value);
  };
  return (
    <div className="d-flex justify-content-between p-2">
      <div className="text-white">Filter by year</div>
      <div>
        <select
        className="form-select "
        aria-label="Default select example"
        value={Filter}
        onChange={(e) => {
          dropdownChangeHandler(e);
        }}
      >
        <option value="2023">2023</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
      </select></div>
    </div>
  );
}
