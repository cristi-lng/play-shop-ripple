import type { GetProductsParams } from '~products/types/getProductsParams';

function buildProductsParams(searchParams: Record<string, string>): GetProductsParams {
  return {
    category: searchParams.category ? searchParams.category : undefined,
    page: searchParams.page ? Number(searchParams.page) : 1,
    pageSize: searchParams.pageSize ? Number(searchParams.pageSize) : 10,
  };
}

export { buildProductsParams };
