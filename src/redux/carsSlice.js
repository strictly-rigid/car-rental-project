import { createSlice } from "@reduxjs/toolkit";
import { fetchCars } from "./operations";

export const initialState = {
  validCars: [],
  favCars: [],
  isLoading: false,
  error: null,
  currentPage: 1,
  perPage: 12,
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      const carToAdd = action.payload;

      // Check if the car is already in favorites
      const index = state.favCars.findIndex((car) => car.id === carToAdd.id);

      if (index !== -1) {
        // If already in favorites, remove it
        state.favCars.splice(index, 1);
      } else {
        // If not in favorites, add it
        state.favCars.push(carToAdd);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
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
    //   .addCase(addContact.pending, (state) => {
    //     state.isLoading = true;
    //   })
    //   .addCase(addContact.rejected, (state, action) => {
    //     state.isLoading = false;
    //     state.error = action.error.message;
    //   })
    //   .addCase(addContact.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     state.error = null;
    //     state.items.push(action.payload);
    //   })
    //   .addCase(deleteContact.pending, (state) => {
    //     state.isLoading = true;
    //   })
    //   .addCase(deleteContact.rejected, (state, action) => {
    //     state.isLoading = false;
    //     state.error = action.error.message;
    //   })
    //   .addCase(deleteContact.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     state.error = null;
    //     state.items = state.items.filter(
    //       (item) => item.id !== action.payload.id
    //     );
    //   })
    //   .addCase(editContact.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     state.error = null;
    //     const index = state.items.findIndex(
    //       (item) => item.id === action.payload.id
    //     );
    //     state.items.splice(index, 1, action.payload);
    //   });
  },
});

const { reducer: carsReducer } = carsSlice;
export default carsReducer;
