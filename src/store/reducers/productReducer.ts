import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllProducts } from '../../api/productsApi';
import IProduct from '../../models/product-model';

interface IInitialState {
  products: IProduct[];
  favorites: IProduct[];
}

const initialState: IInitialState = {
  products: [],
  favorites: [],
};

export const getAllProductsThunk = createAsyncThunk(
  'products/getAllProductsThunk',
  async () => await getAllProducts()
);

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProductToFavorites: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeProductFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter(
        (product) => product.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllProductsThunk.fulfilled, (state, action) => {
      state.products = action.payload.data;
    });
  },
});

export const {addProductToFavorites, removeProductFromFavorites} =
  productSlice.actions;
export default productSlice.reducer;