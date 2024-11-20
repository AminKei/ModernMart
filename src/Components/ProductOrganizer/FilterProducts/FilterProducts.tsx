import { useState } from "react";
import Dropdown from "../../../BaseComponents/Ui/Dropdown/Dropdown";
import Range from "../../../BaseComponents/Ui/Range/Range";
import ToggleSwitch from "../../../BaseComponents/Ui/ToggleSwitch/ToggleSwitch";
import "./FilterProducts.css";
import Checkbox from "../../../BaseComponents/Ui/Checkbox/Checkbox";
import SizeElement from "../../SizeElement/SizeElement";

const options = ["Area 1", "Area 2", "Area 3", "Any area"];

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
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h4>Property Filter</h4>
        <p style={{ color: "gray" }}>Reset all</p>
      </div>
      <div className="property-filter">
        <Dropdown options={options} label="Any area" />
        <hr />
        <p>Location:</p>
        <ToggleSwitch onToggle={handleToggle} option={toggleoption} />
        <hr />
        <p>Property type:</p>
        <ToggleSwitch onToggle={handleToggle} />
        <hr />
        <p>Min Price :</p>
        <Range max={100000} min={0} value={sliderValue} onChange={alert} />
        <p>Max Price :</p>
        <Range max={100000} min={0} value={sliderValue} onChange={alert} />
        <hr />
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
        <hr />
        <p>Bathrooms:</p>
        <SizeElement sizes={["XS", "S", "M", "XXL", "XL", "L"]} label="Size" />
        <hr />
        <p>Bedrooms:</p>
        <SizeElement
          sizes={["Air conditioning", "Assisted living", "Garage"]}
          label="Size"
        />
      </div>
    </div>
  );
};

export default FilterProducts;
