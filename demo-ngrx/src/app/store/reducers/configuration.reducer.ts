import 'rxjs/add/operator/map';
import {ConfigurationActions} from '../actions';

export interface State {
  selectedLanguage: string;
  selectedCulture: string;
  availableLanguages: Array<any>;
}

const initialState: State = {
  selectedLanguage: '',
  selectedCulture: '',
  availableLanguages: [
    {code: 'nl', name: 'NL', culture: 'nl-BE'},
    {code: 'en', name: 'EN', culture: 'en-EN'}
  ]
};

export function reducer(state: State = initialState, action: ConfigurationActions.Actions): State {
  switch (action.type) {
    case ConfigurationActions.ActionTypes.SetLanguage: {
      return {
        ...state,
        selectedLanguage: action.payload
      };
    }

    case ConfigurationActions.ActionTypes.SetCulture: {
      return {
        ...state,
        selectedCulture: action.payload
      };
    }

    default: {
      return state;
    }
  }
}

export const getSelectedLanguage = (state: State) => state.selectedLanguage;
export const getSelectedCulture = (state: State) => state.selectedCulture;
export const getAvailableLanguages = (state: State) => state.availableLanguages;
