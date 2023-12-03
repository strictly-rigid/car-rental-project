import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import carsReducer from "./carsSlice";
// import { filterReducer } from "./filterSlice";

import storage from "redux-persist/lib/storage";

const carsPersistConfig = {
  key: "cars",
  storage,
  // whitelist: ["token", "isAuthorized"],
};

const persistedCarsReducer = persistReducer(carsPersistConfig, carsReducer);

export const store = configureStore({
  reducer: {
    cars: persistedCarsReducer,
    // filter: filterReducer,
  },
});

export const persistor = persistStore(store);
