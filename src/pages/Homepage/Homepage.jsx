import css from "./Homepage.module.css";

export const HomePage = () => {
  return (
    <div className={css.homepage}>
      <div className={css.overlay}>
        <h1>Welcome to the Car Rental Service!</h1>
        <p>
          On our web-site you'll find various cars to rent. Going to a family
          journey or a business trip? We'll help you to pick the car that is
          best for you!
        </p>
        <p>
          Search easily cars by brand, price or mileage and enjoy the fast and
          high-quality service!
        </p>
      </div>
    </div>
  );
};
