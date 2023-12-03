import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";

import css from "./CarItem.module.css";
import ModalWindow from "../ModalWindow/ModalWindow";
import { addToFavorites } from "../../redux/actions";
// import favIcon from "../../images/heart.svg";
import { selectFavCars } from "../../redux/selectors";

export default function CarItem({ car }) {
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
  } = car;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const dispatch = useDispatch();
  const addToFavoritesToggler = () => {
    dispatch(addToFavorites(car));
  };

  const favoriteCars = useSelector(selectFavCars);
  const isFavorite = favoriteCars.some((favCar) => favCar.id === car.id);

  return (
    <div className={css.itemContainer}>
      <button
        type="button"
        className={css.btnAddFavorite}
        onClick={addToFavoritesToggler}>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
          <path
            d="M12 21.35l-1.45-1.32C6.42 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C15.09 3.81 16.76 3 18.5 3 21.58 3 24 5.42 24 8.5c0 3.78-4.42 6.86-8.55 11.54L12 21.35z"
            fill={isFavorite ? "blue" : "white"}
            stroke="blue"
          />
        </svg>
      </button>
      <img src={img} alt="car" width="274px" height="268px"></img>
      <div className={css.firstRowCard}>
        <div>
          {make} {model}, {year}
        </div>
        <div>{rentalPrice}</div>
      </div>
      <div className={css.secondRowCard}>
        {address} | {rentalCompany}
      </div>
      <div className={css.thirdRowCard}>
        {type} | {model} | {id} | {functionalities[0]}
      </div>
      <button type="button" className={css.btnModal} onClick={toggleModal}>
        Learn more
      </button>

      {isModalOpen && (
        <ModalWindow
          carItemModal={car}
          isOpenModalToggle={toggleModal}></ModalWindow>
      )}
    </div>
  );
}

CarItem.propTypes = {
  car: PropTypes.shape({
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
  }).isRequired,
};
