import React from "react";
import CustomScroll from "react-customscroll";
import DropdownTreeSelect from "react-dropdown-tree-select";
import '../styles/CheckBox.css';

import "react-dropdown-tree-select/dist/styles.css";


import data from "../assets/data.json";

const CheckBox = ()=> {
  return (
    <div className="CheckBox">
      <div className="tree-outer-wrap">
        <div className="tree-inner-wrap">
          <CustomScroll>
            <DropdownTreeSelect
              data={data}
              showDropdown="always"
              texts={{ placeholder: "Search" }}
              showPartiallySelected="true"
              inlineSearchInput="true"
            />
          </CustomScroll>
        </div>
      </div>
    </div>
  );
}

export default CheckBox;