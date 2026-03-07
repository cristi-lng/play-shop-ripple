import { axios } from 'src/api/axiosProvider';
import type { GetProductsParams } from '~products/types/getProductsParams';
import type { GetProductsResponse } from '~products/types/getProductsResponse';

async function getProducts(getProductsParams: GetProductsParams) {
  const queryString = new URLSearchParams(
    Object.entries(getProductsParams)
      .filter(([_, v]) => Boolean(v))
      .map(([k, v]) => [k, String(v)]),
  ).toString();
  const { data } = await axios.get<GetProductsResponse>(`/api/products?${queryString}`);
  return data;
}

export { getProducts };
