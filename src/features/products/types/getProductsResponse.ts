import type { ProductSummary } from 'src/types/productSummary';

type GetProductsResponse = {
  products: ProductSummary[];
  total: number;
};

export type { GetProductsResponse };
