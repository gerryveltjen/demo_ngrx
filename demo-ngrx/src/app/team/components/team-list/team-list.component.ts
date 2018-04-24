import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {TeamMember} from '../../models/teamMember.model';

@Component({
  selector: 'csn-team-list',
  templateUrl: './team-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TeamListComponent implements OnInit {
  @Input()
  members: TeamMember[];

  displayedColumns = ['Naam', 'Voornaam', 'Team', 'Afbeelding'];

  constructor() {
  }

  ngOnInit(): void {
  }
}
