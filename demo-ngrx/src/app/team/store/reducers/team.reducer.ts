import {TeamActions} from '../actions';
import {TeamMember} from '../../models/teamMember.model';

export interface State {
  loaded: boolean;
  loading: boolean;
  teamMembers: TeamMember[];
  error: object;
}

const initialState: State = {
  loaded: false,
  loading: false,
  teamMembers: [],
  error: undefined
};

export function reducer(state: State = initialState,
                        action: TeamActions.Actions): State {
  switch (action.type) {
    case  TeamActions.ActionTypes.Load: {
      return {
        ...state,
        loading: true,
      };
    }

    case TeamActions.ActionTypes.LoadSuccess: {
      return {
        ...state,
        loaded: true,
        loading: false,
        teamMembers: action.payload,
        error: undefined,
      };
    }

    case TeamActions.ActionTypes.LoadFail: {
      return {
        ...state,
        loaded: false,
        loading: false,
        error: action.payload,
      };
    }

    default: {
      return state;
    }
  }
}

export const getTeamMembers = (state: State) => state.teamMembers;
export const getTeamMembersLoading = (state: State) => state.loading;
export const getTeamMembersLoaded = (state: State) => state.loaded;
