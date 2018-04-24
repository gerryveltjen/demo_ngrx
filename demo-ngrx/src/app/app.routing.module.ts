// CORE
import {NgModule} from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/team',
    pathMatch: 'full',
  },
  {
    path: 'team',
    loadChildren: './team/team.module#TeamModule',
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true,
      }),
  ],
  providers: [],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
