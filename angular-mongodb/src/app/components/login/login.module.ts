import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from 'src/app/redux/auth-reducer.ts/auth.effects';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        LoginRoutingModule,
        CommonModule,
        ReactiveFormsModule,
        EffectsModule.forRoot([AuthEffects]),
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule
    ],
    providers: [
        AuthenticationService
    ],
    bootstrap: [LoginComponent]
})
export class LoginModule { }
