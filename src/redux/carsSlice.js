import { createSlice } from '@reduxjs/toolkit';
import { fetchCars } from './operations';

export const initialState = {
  validCars: [],
  favCars: [],
  isLoading: false,
  error: null,
  currentPage: 1,
  perPage: 12,
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      const carToAdd = action.payload;

      const index = state.favCars.findIndex(car => car.id === carToAdd.id);

      if (index !== -1) {
        state.favCars.splice(index, 1);
      } else {
        state.favCars.push(carToAdd);
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCars.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.validCars = action.payload;
        state.currentPage += 1;
      });
  },
});

const { reducer: carsReducer } = carsSlice;
export default carsReducer;
