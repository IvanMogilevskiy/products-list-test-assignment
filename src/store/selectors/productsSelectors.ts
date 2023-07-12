import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

const selectState = (state: RootState) => state.products;

export const selectProducts = createSelector(
  selectState,
  (state) => state.products
);

export const selectFavorites = createSelector(
  selectState,
  (state) => state.favorites
);