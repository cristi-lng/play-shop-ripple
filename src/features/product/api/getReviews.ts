import { axios } from 'src/api/axiosProvider';
import type { Review } from '~product/types/review';

async function getReviews(productId: number) {
  const { data } = await axios.get<Review[]>(`/api/reviews/${productId}`);
  return data;
}

export { getReviews };
