// CORE
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {reducers, effects} from './store';

// MODULES
import {TeamRoutingModule} from './team.routing.module';
import {SharedModule} from '../shared/shared.module';

// COMPONENTS
import {TeamOverviewComponent} from './containers/team-overview/team-overview.component';
import {TeamListComponent} from './components/team-list/team-list.component';

// PROVIDERS
import {TeamService} from './services/team.service';

export const CORE = [
  CommonModule,
  HttpClientModule,
  StoreModule.forFeature('team', reducers),
  EffectsModule.forFeature(effects),
];

export const MODULES = [
  TeamRoutingModule,
  SharedModule,
];

export const COMPONENTS = [
  TeamOverviewComponent,
  TeamListComponent,
];

@NgModule({
  declarations: COMPONENTS,
  imports: [
    CORE,
    MODULES,
  ],
  providers: [TeamService]
})
export class TeamModule {
}

