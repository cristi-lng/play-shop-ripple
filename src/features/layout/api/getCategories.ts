import { axios } from 'src/api/axiosProvider';
import type { Category } from '~layout/types/category';

async function getCategories() {
  const { data } = await axios.get<Category[]>('/api/categories');
  return data;
}

export { getCategories };
