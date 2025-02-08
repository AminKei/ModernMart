import { useState } from "react";
import Dropdown from "../../../BaseComponents/Ui/Dropdown/Dropdown";
import ToggleSwitch from "../../../BaseComponents/Ui/ToggleSwitch/ToggleSwitch";
import "./FilterProducts.css";
import Checkbox from "../../../BaseComponents/Ui/Checkbox/Checkbox";
import SizeElement from "../../SizeElement/SizeElement";
import Button from "../../../BaseComponents/Ui/Button/Button";
import Range from "../../../BaseComponents/Ui/Range/Range";

const options = ["Mens", "Womens", "Kids", "somthing else"];

/* toggle */
const toggleoption = ["Residential", "Commercial"];
const handleToggle = (isMonthly: boolean) => {
  console.log(`Switched to: ${isMonthly ? "Monthly" : "Yearly"}`);
};

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
        <p>Location:</p>
        <ToggleSwitch
          onToggle={handleToggle}
          option={toggleoption}
          Option1="Yearly"
          Option2="Monthly"
        />
        <p>Property type:</p>
        <ToggleSwitch
          onToggle={handleToggle}
          Option1="Residential"
          Option2="Commercial"
        />
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
      <hr />
      <Button>Reset All</Button>
    </div>
  );
};

export default FilterProducts;
