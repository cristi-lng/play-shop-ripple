import { axios } from 'src/api/axiosProvider';
import type { ProductDetails } from 'src/types/productDetails';

async function getProduct(id: number) {
  const { data } = await axios.get<ProductDetails>(`/api/products/${id}`);
  return data;
}

export { getProduct };
