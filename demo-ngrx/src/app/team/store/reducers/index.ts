import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';
import * as fromRoot from '../../../store';
import * as fromTeam from './team.reducer';

export interface State {
  team: fromTeam.State;
}

export interface AppState extends fromRoot.AppState {
  team: State;
}

export const reducers: ActionReducerMap<State> = {
  team: fromTeam.reducer,
};

export const getTeamState = createFeatureSelector<State>(
  'team'
);
