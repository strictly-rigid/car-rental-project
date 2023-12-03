import { useSelector } from 'react-redux';
import { selectFavCars } from '../../redux/selectors';
import CarItem from '../../components/CarITem/CarItem';
import css from './Favorites.module.css';

export default function Favorites() {
  const favoriteCars = useSelector(selectFavCars);
  console.log(favoriteCars);

  return (
    <div className={css.favoritesContainer}>
      {favoriteCars.length > 0 ? (
        favoriteCars.map(favCarItem => (
          <CarItem
            className={css.favoritesItem}
            key={favCarItem.id}
            car={favCarItem}
          />
        ))
      ) : (
        <div>No favorite cars</div>
      )}
    </div>
  );
}
