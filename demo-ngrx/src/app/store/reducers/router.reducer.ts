import { ActivatedRouteSnapshot, Params, RouterStateSnapshot } from '@angular/router';
import { routerReducer, RouterReducerState, RouterStateSerializer } from '@ngrx/router-store';

interface RouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
}

export type State = RouterReducerState<RouterStateUrl>;

export const reducer = routerReducer;

export class CustomSerializer implements RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    const {url} = routerState;
    const {queryParams} = routerState.root;
    let params = {};

    let route: ActivatedRouteSnapshot = routerState.root;
    while (route.firstChild) {
      params = setParams(params, route.params);
      route = route.firstChild;
    }

    params = setParams(params, route.params);

    return {url, queryParams, params: params};
  }
}

export function setParams(currentParams: Params, routeParams: Params): any {
  return {
    ...currentParams,
    ...routeParams
  };
}

export const getUrl = (routerState: State) => routerState.state.url;
export const getQueryParams = (routerState: State) => routerState.state.queryParams;
export const getParams = (routerState: State) => routerState.state.params;
