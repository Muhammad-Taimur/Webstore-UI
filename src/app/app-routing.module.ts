import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './Components/signup/signup.component';
import { LoginComponent } from './Components/login/login.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { AuthGuard } from './Guard/auth.guard';

import { AlreadyLoggedInGuard } from './Guard/already-logged-in.guard';


const routes: Routes = [
  {path:'', redirectTo : '/login', pathMatch: 'full'},
  {path:'signup', component: SignupComponent,canActivate:[AlreadyLoggedInGuard]},
  {path:'login', component:LoginComponent,canActivate:[AlreadyLoggedInGuard]},
  {path:'dashboard', component:DashboardComponent,canActivate: [AuthGuard]},
  {path:'**', component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
