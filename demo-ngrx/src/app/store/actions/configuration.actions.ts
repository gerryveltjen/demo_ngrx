import {Action} from '@ngrx/store';

export enum ActionTypes {
  SetLanguage = '[Settings] Set Language',
  SetCulture = '[Settings] Set Culture'
}

export class SetLanguageAction implements Action {
  readonly type: any;

  constructor(public payload: string) {
  }
}

export class SetCultureAction implements Action {
  readonly type: any;

  constructor(public payload: string) {
  }
}

export type Actions =
  | SetLanguageAction
  | SetCultureAction;
