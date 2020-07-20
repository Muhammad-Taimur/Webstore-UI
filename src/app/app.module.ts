import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
//import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// Import library module
import { NgxSpinnerModule } from "ngx-spinner";
import {MatToolbarModule} from '@angular/material/toolbar';

// import {FlexLayoutModule} from '@angular/flex-layout'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './Components/signup/signup.component';
import { LoginComponent } from './Components/login/login.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { AuthService } from './Services/auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { OrderComponent } from './Components/order/order.component';
import { ProductComponent } from './Components/product/product.component';
import { AuthGuard } from './Guard/auth.guard';
import { AlreadyLoggedInGuard } from './Guard/already-logged-in.guard';
import { NavbarComponent } from './Components/navbar/navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    NotFoundComponent,
    DashboardComponent,
    OrderComponent,
    ProductComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSliderModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    NgxSpinnerModule,
    MatToolbarModule,
    // FlexLayoutModule,
    ToastrModule.forRoot({
      closeButton : true,
      timeOut: 5000,
      extendedTimeOut: 2000,
      easing: 'ease-in',
      easeTime : 400,
      tapToDismiss:false,
      preventDuplicates: true
    })
  ],
  providers: [AuthService, AuthGuard,AlreadyLoggedInGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
