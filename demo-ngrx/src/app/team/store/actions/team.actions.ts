import {Action} from '@ngrx/store';
import {TeamMember} from '../../models/teamMember.model';

export enum ActionTypes {
  Load = '[Team] Load teamMembers',
  LoadSuccess = '[Team] Load teamMembers success',
  LoadFail = '[Team] Load teamMembers fail',
}

export class Load implements Action {
  readonly type: ActionTypes.Load = ActionTypes.Load;

  constructor(public payload: any = null) {
  }
}

export class LoadSuccess implements Action {
  readonly type: ActionTypes.LoadSuccess = ActionTypes.LoadSuccess;

  constructor(public payload: TeamMember[]) {
  }
}

export class LoadFail implements Action {
  readonly type: ActionTypes.LoadFail = ActionTypes.LoadFail;

  constructor(public payload: object) {
  }
}

export type Actions =
  | Load
  | LoadSuccess
  | LoadFail;
