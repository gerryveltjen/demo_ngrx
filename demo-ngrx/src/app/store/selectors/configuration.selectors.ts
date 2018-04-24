import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromConfiguration from '../reducers/configuration.reducer';

export const getConfigurationState = createFeatureSelector<fromConfiguration.State>('configuration');

export const getSelectedLanguage = createSelector(getConfigurationState, fromConfiguration.getSelectedLanguage);
export const getSelectedCulture = createSelector(getConfigurationState, fromConfiguration.getSelectedCulture);
export const getAvailableLanguages = createSelector(getConfigurationState, fromConfiguration.getAvailableLanguages);

