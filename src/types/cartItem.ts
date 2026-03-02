import type { ProductSummary } from 'src/types/productSummary';
import type { ProductDetails } from 'src/types/productDetails';

type CartItem = {
  product: ProductSummary | ProductDetails;
  quantity: number;
};

export { type CartItem };
