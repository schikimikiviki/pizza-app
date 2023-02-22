import NameFilter from "./NameFilter";
import PriceFilter from "./PriceFilter";
import AllergensFilter from "./AllergensFilter";
import Button from "./ButtonComponent";

function FilterComponent(props) {
  return (
    <div>
      <NameFilter isSetName={props.isSetName} />

      <PriceFilter
        isSetMinPrice={props.isSetMinPrice}
        isSetMaxPrice={props.isSetMaxPrice}
      />
      <AllergensFilter
        isSetAllergen={props.isSetAllergen}
        allergenData={props.allergenData}
      />
      <Button
        onClick={() => props.isFilterPizzas()}
        buttonClassName={"filter-button"}
        buttonName={"Filter"}
      />
    </div>
  );
}

export default FilterComponent;
