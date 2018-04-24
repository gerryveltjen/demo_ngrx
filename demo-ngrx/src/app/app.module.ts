// CORE
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {
  StoreRouterConnectingModule,
  RouterStateSerializer,
} from '@ngrx/router-store';
import {CustomSerializer} from './store/reducers/router.reducer';
import {metaReducers, reducers} from './store';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {environment} from '../environments/environment';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

// MODULES
import {AppRoutingModule} from './app.routing.module';
import {SharedModule} from './shared/shared.module';

// COMPONENTS
import {AppComponent} from './app.component';

export const CORE = [
  BrowserModule,
  HttpClientModule,
  BrowserAnimationsModule,
  StoreModule.forRoot(reducers, {metaReducers}),
  StoreRouterConnectingModule.forRoot({
    /*
      They stateKey defines the name of the state used by the router-store reducer.
      This matches the key defined in the map of reducers
    */
    stateKey: 'router',
  }),
  EffectsModule.forRoot([]),
  !environment.production ? StoreDevtoolsModule.instrument() : [],
];

export const MODULES = [
  AppRoutingModule,
  SharedModule,
];

export const COMPONENTS = [AppComponent];

@NgModule({
  declarations: [
    COMPONENTS
  ],
  imports: [
    CORE,
    MODULES
  ],
  providers: [{ provide: RouterStateSerializer, useClass: CustomSerializer }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
