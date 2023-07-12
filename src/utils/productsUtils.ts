import IProduct from '../models/product-model';

export const isProductInList = (product: IProduct, list: IProduct[]) =>
  !!list.find((listProduct) => listProduct.id === product.id);