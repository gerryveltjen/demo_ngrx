import {createSelector} from '@ngrx/store';
import * as fromFeature from '../reducers';
import * as fromTeam from '../reducers/team.reducer';

export const selectTeamState = createSelector(
  fromFeature.getTeamState,
  (state: fromFeature.State) => state.team
);

export const getTeamMembers = createSelector(selectTeamState, fromTeam.getTeamMembers);
