import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {Effect, Actions, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {TeamService} from '../../services/team.service';
import {TeamActions} from '../actions';
import {TeamMember} from '../../models/teamMember.model';
import {switchMap, map, catchError} from 'rxjs/operators';

@Injectable()
export class TeamEffects {

  constructor(private actions$: Actions,
              private teamService: TeamService) {
  }

  @Effect()
  loadTeamMembers$: Observable<Action> = this.actions$
    .pipe(
      ofType(TeamActions.ActionTypes.Load),
      map((action: TeamActions.Load) => action.payload),
      switchMap(() => {
          return this.teamService
            .getTeamMembers()
            .pipe(
              map((teamMembers: TeamMember[]) => new TeamActions.LoadSuccess(teamMembers)),
              catchError(error => of(new TeamActions.LoadFail(error)))
            );
        }
      )
    );
}
