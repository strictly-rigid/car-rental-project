import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../../redux/operations";

import {
  selectCars,
  selectIsLoading,
  // selectCurrentPage,
} from "../../redux/selectors";
import CarItem from "../../components/CarITem/CarItem";
// import Dropdown from "../../components/Dropdown/Dropdown";
import carMakes from "../../sources/makes.json";
import css from "./Catalog.module.css";
import { nanoid } from "nanoid";

export default function Catalog() {
  const dispatch = useDispatch();
  const allCars = useSelector(selectCars);
  const isLoading = useSelector(selectIsLoading);
  const [selectOption, setSelectOption] = useState(null);
  // let currentPage = useSelector(selectCurrentPage);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  // const loadMore = () => {
  //   currentPage += 1;
  // };

  const filteredCars = selectOption
    ? allCars.filter((carItem) => carItem.make === selectOption)
    : allCars;

  const handleDropdownChange = (event) => {
    setSelectOption(event.target.value);
  };
  console.log(filteredCars);

  return (
    <div>
      <div className={css.dropdownContainer}>
        <label htmlFor="dropdown">Car brand</label>
        <select
          id="dropdown"
          name="dropdown"
          value={selectOption}
          onChange={handleDropdownChange}>
          {carMakes.map((make) => (
            <option key={nanoid()} value={make}>
              {make}
            </option>
          ))}
        </select>
      </div>
      <div className={css.catalogContainer}>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          filteredCars.map((carItem) => (
            <CarItem
              className={css.catalogItem}
              key={carItem.id}
              car={carItem}
            />
          ))
        )}

        <button className={css.btnLoadMore} type="button">
          Load more
        </button>
      </div>
    </div>
  );
}
