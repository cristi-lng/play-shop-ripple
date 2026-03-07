import type { GetProductsParams } from '~products/types/getProductsParams';

function buildProductsParams(): GetProductsParams {
  const searchParams = new URLSearchParams(window.location.search);
  return {
    category: searchParams.get('category') ? (searchParams.get('category') as string) : undefined,
    page: searchParams.get('page') ? Number(searchParams.get('page')) : 1,
    pageSize: searchParams.get('pageSize') ? Number(searchParams.get('pageSize')) : 10,
  };
}

export { buildProductsParams };
