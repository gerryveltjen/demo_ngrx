import { Action } from '@ngrx/store';

import { RouterNavigatePayload } from '../../models/router-navigate-payload.interface';

export enum ActionTypes {
  Navigate = '[Core] Router navigate',
  Back = '[Core] Router back',
  Forward = '[Core] Router forward'
}

export class Navigate implements Action {
  readonly type: any;

  constructor(public payload: RouterNavigatePayload) { }
}

export class Back implements Action {
  readonly type: any;
}

export class Forward implements Action {
  readonly type: any;
}

export type Actions =
  | Navigate
  | Back
  | Forward;
