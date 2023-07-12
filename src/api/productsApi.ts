import axios from 'axios';

export const baseUrl = 'https://testbackend.nc-one.com';

export const getAllProducts = async () => await axios.get(`${baseUrl}/image`);
export const getProduct = async (id: string) =>
  await axios.get(`${baseUrl}/image?id=${id}`);