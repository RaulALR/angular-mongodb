import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '' }
  // { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// { path: '', component: HomeComponent, canActivate: [AuthGuard] },
//     { path: 'login', component: LoginComponent },
//     { path: 'register', component: RegisterComponent },

//     // otherwise redirect to home
//     { path: '**', redirectTo: '' }
