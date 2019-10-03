import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginRegisterComponent } from './login-register.component';

const routes: Routes = [
    { path: '', component: LoginRegisterComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoginRegisterRoutingModule { }
