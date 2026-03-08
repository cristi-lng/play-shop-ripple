/**
 * Navigates to a path.
 *
 * @param path - The path to navigate to.
 * @param options - The options to navigate with.
 * @param options.replace - Whether to replace the current history entry.
 * @param options.searchParams - The search params to navigate with.
 * @param options.hash - The hash to navigate with.
 */
export default function navigateTo(
  path: string,
  options?: { replace?: boolean; searchParams?: Record<string, string>; hash?: string },
) {
  const search = options?.searchParams ? new URLSearchParams(options.searchParams).toString() : '';
  const url = search ? `${path}?${search}` : path;

  if (options?.hash) window.location.hash = options.hash;

  options?.replace ? window.history.replaceState({}, '', url) : window.history.pushState({}, '', url);

  window.dispatchEvent(new Event('popstate'));
}
