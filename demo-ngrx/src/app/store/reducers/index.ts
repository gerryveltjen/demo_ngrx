import {Action, ActionReducerMap, MetaReducer, ActionReducer} from '@ngrx/store';
import {storeFreeze} from 'ngrx-store-freeze';

import {environment} from '../../../environments/environment';
import * as fromRouter from './router.reducer';
import * as fromConfiguration from './configuration.reducer';

export interface AppState {
  configuration: fromConfiguration.State;
  router: fromRouter.State;
}

export const reducers: ActionReducerMap<AppState> = {
  configuration: fromConfiguration.reducer,
  router: fromRouter.reducer,
};

export function logger(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
  return (state: AppState, action: Action): AppState => {
    const nextState = reducer(state, action);

    console.groupCollapsed(action.type);

    console.group('State before');
    console.log(state);
    console.groupEnd();

    console.group('Action payload');
    console.log((action as any).payload);
    console.groupEnd();

    console.group('State after');
    console.log(nextState);
    console.groupEnd();

    console.groupEnd();

    return nextState;
  };
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [logger, storeFreeze] : [];
