// CORE
import {NgModule} from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

// COMPONENTS
import {TeamOverviewComponent} from './containers/team-overview/team-overview.component';

const teamRoutes: Routes = [
  {
    path: '',
    component: TeamOverviewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(teamRoutes)],
  exports: [RouterModule],
})

export class TeamRoutingModule {
}
