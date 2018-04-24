import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromRouter from '../reducers/router.reducer';

export const getState = createFeatureSelector<fromRouter.State>('router');

export const getUrl = createSelector(getState, fromRouter.getUrl);
export const getQueryParams = createSelector(getState, fromRouter.getQueryParams);
export const getParams = createSelector(getState, fromRouter.getParams);
