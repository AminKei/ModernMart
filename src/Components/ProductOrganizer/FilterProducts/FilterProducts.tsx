import { useState } from "react";
import Dropdown from "../../../BaseComponents/Ui/Dropdown/Dropdown";
import Range from "../../../BaseComponents/Ui/Range/Range";
import ToggleSwitch from "../../../BaseComponents/Ui/ToggleSwitch/ToggleSwitch";
import "./FilterProducts.css";
import Checkbox from "../../../BaseComponents/Ui/Checkbox/Checkbox";
import SizeElement from "../../SizeElement/SizeElement";
import { useProducts } from "../../../Hooks/Products/useProducts";

const options = ["Mens", "Womens", "Kids", "somthing else"];

/* toggle */
const toggleoption = ["Residential", "Commercial"];
const handleToggle = (isMonthly: boolean) => {
  console.log(`Switched to: ${isMonthly ? "Monthly" : "Yearly"}`);
};

/* range */

const sliderValue = 50;


const FilterProducts = () => {
  /* chechbox */
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = (checked: boolean) => {
    setIsChecked(checked);
  };



  return (
    <div className="conteier-filter-products">
    
      <div className="property-filter">
        <Dropdown options={options} label="Any Filter" />
        {/* <hr />e */}
        <p>Location:</p>
        <ToggleSwitch
          onToggle={handleToggle}
          option={toggleoption}
          Option1="Yearly"
          Option2="Monthly"
        />
        {/* <hr /> */}
        <p>Property type:</p>
        <ToggleSwitch
          onToggle={handleToggle}
          Option1="Residential"
          Option2="Commercial"
        />
        {/* <hr /> */}
        <p>Min Price :</p>
        <Range max={100000} min={0} value={sliderValue}  />
        <p>Max Price :</p>
        <Range max={100000} min={0} value={sliderValue}  />
        {/* <hr /> */}
        <p>Filter Checked:</p>
        <Checkbox
          label="Single-Family"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <Checkbox
          label="Townhomes"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <Checkbox
          label="Multy-Family"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <Checkbox
          label="Condo"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        {/* <hr /> */}
        <p>Bathrooms:</p>
        <SizeElement sizes={["XS", "XXL", "XL", "L"]} label="Size" />
      </div>
    </div>
  );
};

export default FilterProducts;
