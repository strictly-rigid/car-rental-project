import { useEffect } from "react";
import PropTypes from "prop-types";

import css from "./ModalWindow.module.css";
// import closeBtn from "../../images/closeBtn.png";
import * as closeBtn from "../../images/closeBtn.png";
// import sprite from "../../images/sprite.svg";

export default function ModalWindow({ carItemModal, isOpenModalToggle }) {
  const {
    img,
    model,
    make,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    id,
    functionalities,
    fuelConsumption,
    engineSize,
    description,
    accessories,
    rentalConditions,
    mileage,
  } = carItemModal;

  useEffect(() => {
    const closeESC = (e) => {
      if (e.code === "Escape") {
        isOpenModalToggle();
      }
    };
    document.addEventListener("keydown", closeESC);
    return () => {
      document.removeEventListener("keydown", closeESC);
    };
  }, [isOpenModalToggle]);

  useEffect(() => {
    const closeOnBackdrop = (e) => {
      if (e.target.classList.contains(css.modalContainer)) {
        isOpenModalToggle();
      }
    };
    document.addEventListener("click", closeOnBackdrop);
    return () => {
      document.removeEventListener("click", closeOnBackdrop);
    };
  }, [isOpenModalToggle]);

  const conditionsArr = rentalConditions.split("\n");
  return (
    <div className={css.modalContainer}>
      <div className={css.modalWindow}>
        <div className={css.itemContainer}>
          <button
            type="button"
            className={css.btnModalClose}
            onClick={() => isOpenModalToggle()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="black">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>{" "}
            </svg>
          </button>
          <img src={img} alt="car" width="461px" height="248px"></img>
          <div className={css.firstRowCard}>
            {make} <span className={css.spanText}>{model}</span>, {year}
          </div>
          <div className={css.secondRowCard}>
            {address} | {id} | {year} | {type}
          </div>
          <div className={css.thirdRowCard}>
            Fuel Consumption: {fuelConsumption} | Engine Size: {engineSize}
          </div>
          <p className={css.description}>{description}</p>
          <p className={css.accessoriesDescription}>
            Accessories and functionalities:
          </p>
          <div className={css.fourthRowCard}>
            {accessories.map((item) => ` ${item} | `)}
          </div>
          <div className={css.fifthRowCard}>
            {functionalities.map((item) => ` ${item} | `)}
          </div>
          <p className={css.accessoriesDescription}>Rental Conditions:</p>
          <div className={css.rentalConditionsContainer}>
            {conditionsArr.map((item) => (
              <div className={css.condition}>{item}</div>
            ))}
            <div className={css.condition}>
              Mileage:{" "}
              <span className={css.spanText}>
                {mileage.toString().replace(/^(\d)(\d*)$/, "$1,$2")}
              </span>
            </div>
            <div className={css.condition}>
              Price: <span className={css.spanText}> {rentalPrice}</span>
            </div>
          </div>
          <button type="button" className={css.rentalCarBtn}>
            <a href="tel:+380730000000" className={css.rentalCarLink}>
              Rental car
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

ModalWindow.propTypes = {
  carItemModal: PropTypes.shape({
    img: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    make: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    rentalPrice: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    rentalCompany: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    functionalities: PropTypes.arrayOf(PropTypes.string).isRequired,
    fuelConsumption: PropTypes.string.isRequired,
    engineSize: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    accessories: PropTypes.arrayOf(PropTypes.string).isRequired,
    rentalConditions: PropTypes.string.isRequired,
    mileage: PropTypes.string.isRequired,
  }).isRequired,
  isOpenModalToggle: PropTypes.func.isRequired,
};
