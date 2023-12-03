import { createSelector } from "@reduxjs/toolkit";

export const selectCars = (state) => state.cars.validCars;
export const selectFavCars = (state) => state.cars.favCars;
// export const selectFilter = (state) => state.filter;
// export const selectError = (state) => state.contacts.error;
export const selectIsLoading = (state) => state.isLoading;
export const selectCurrentPage = (state) => state.currentPage;

// export const selectFilteredContacts = createSelector(
//   [selectContacts, selectFilter],
//   (contacts, filter) => {
//     return contacts.filter(({ name }) =>
//       name.toLowerCase().includes(filter.toLowerCase())
//     );
//   }
// );
