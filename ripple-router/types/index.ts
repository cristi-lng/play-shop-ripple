import type { Component } from 'ripple';
import { ExtractPathParams } from 'ripple-router/types/route';

export type RouteConfig = {
  path: string;
  element: Component;
};

export type RouterProps = {
  routes: RouteConfig[];
};

export type RouteProps<T extends string = string> = {
  pathParams: ExtractPathParams<T>;
  searchParams: Record<string, string>;
};

export declare function Router(props: RouterProps): void;
export declare function Link(props: { to: string; children: Component }): void;

export declare function navigateTo(path: string): void;
