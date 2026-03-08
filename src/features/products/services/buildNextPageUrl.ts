import type { GetProductsParams } from '~/products/types/getProductsParams';

type BuildNextPageUrlArgs = {
  requestedPage: number;
  lastPage: number;
  productsParams: GetProductsParams;
};

function buildNextPageUrl({ requestedPage, lastPage, productsParams }: BuildNextPageUrlArgs) {
  if (requestedPage < 1 || requestedPage > lastPage) return '';

  const nextPageParams = { ...productsParams, page: requestedPage };
  return `/?${new URLSearchParams(
    Object.entries(nextPageParams)
      .filter(([, v]) => Boolean(v))
      .map(([k, v]) => [k, String(v)]),
  ).toString()}`;
}

export { buildNextPageUrl };
