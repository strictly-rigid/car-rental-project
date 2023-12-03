import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import carsReducer from './carsSlice';

import storage from 'redux-persist/lib/storage';

const carsPersistConfig = {
  key: 'cars',
  storage,
};

const persistedCarsReducer = persistReducer(carsPersistConfig, carsReducer);

export const store = configureStore({
  reducer: {
    cars: persistedCarsReducer,
  },
});

export const persistor = persistStore(store);
