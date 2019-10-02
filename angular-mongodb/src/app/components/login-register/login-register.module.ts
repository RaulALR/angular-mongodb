import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { LoginRegisterRoutingModule } from './login-register-routing.module';
import { MatCardModule, MatInputModule, MatFormFieldModule, MatButtonModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginRegisterComponent } from './login-register.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent,
        LoginRegisterComponent
    ],
    imports: [
        CommonModule,
        LoginRegisterRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule
    ],
    providers: [],
    bootstrap: [LoginRegisterComponent]
})
export class LoginRegisterModule { }
