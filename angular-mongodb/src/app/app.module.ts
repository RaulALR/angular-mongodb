import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducers } from './redux/app.reducers';
import { Utils } from './core/services/utils';
import { CommonModule } from '@angular/common';
import { HttpService } from './core/services/http.service';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './redux/auth-reducer.ts/auth.effects';
import { LoginRegisterModule } from './components/login-register/login-register.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([AuthEffects]),
    StoreDevtoolsModule.instrument(),
    LoginRegisterModule
  ],
  providers: [
    HttpService,
    Utils
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
