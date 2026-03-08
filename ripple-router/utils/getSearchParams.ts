/**
 * Parse search params from a query string into a plain object.
 *
 * @param search - The search string (e.g. `?foo=bar&baz=qux`).
 * @returns Record of param name to value (all values are strings).
 */
export function getSearchParams(search: string): Record<string, string> {
  const params: Record<string, string> = {};
  if (!search || search === '?') return params;

  const searchParams = new URLSearchParams(search.startsWith('?') ? search.slice(1) : search);
  for (const [key, value] of searchParams) {
    params[key] = value;
  }
  return params;
}
