import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './Components/signup/signup.component';
import { LoginComponent } from './Components/login/login.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { AuthGuard } from './Guard/auth.guard';

import { AlreadyLoggedInGuard } from './Guard/already-logged-in.guard';
import { OrderComponent } from './Components/order/order.component';
import { ProductComponent } from './Components/product/product.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductdetailComponent } from './components/productdetail/productdetail.component';

const routes: Routes = [
  {path:'', redirectTo : '/login', pathMatch: 'full'},
  {path:'signup', component: SignupComponent,canActivate:[AlreadyLoggedInGuard]},
  {path:'login', component:LoginComponent,canActivate:[AlreadyLoggedInGuard]},
  {path:'dashboard', component:DashboardComponent,canActivate: [AuthGuard]},
  {path:'dashboard/:id', component:ProductdetailComponent,canActivate: [AuthGuard]},
  {path:'order',component:OrderComponent,canActivate: [AuthGuard]},
  {path:'product',component:ProductComponent,canActivate: [AuthGuard]},
  {path:'contact',component:ContactComponent,canActivate: [AuthGuard]},
  {path:'**', component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
