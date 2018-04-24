import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {TeamMember} from '../../models/teamMember.model';
import {Store} from '@ngrx/store';
import {
  AppState,
  TeamActions,
  TeamSelectors
} from '../../store';

@Component({
  selector: 'csn-team-overview',
  templateUrl: './team-overview.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TeamOverviewComponent implements OnInit {
  teamMembers$: Observable<TeamMember[]> = this.store.select(TeamSelectors.getTeamMembers);

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.store.dispatch(new TeamActions.Load());
  }
}

