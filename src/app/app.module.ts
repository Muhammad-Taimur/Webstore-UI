import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
//import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgxSpinnerModule } from "ngx-spinner";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';

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

import { FooterComponent } from './Components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { NewnavbarComponent } from './components/newnavbar/newnavbar.component';
import { AuthInterceptorService } from './interceptor/auth-interceptor.service';
import { ProductdetailComponent } from './components/productdetail/productdetail.component';





@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    NotFoundComponent,
    DashboardComponent,
    OrderComponent,
    ProductComponent,
    NavbarComponent,
    FooterComponent,
    ContactComponent,
    NewnavbarComponent,
    ProductdetailComponent,
    
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
    MatIconModule,
    MatFormFieldModule,
    NgxGalleryModule,
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
  providers: [AuthService, AuthGuard,AlreadyLoggedInGuard,
    {provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true}
],
  bootstrap: [AppComponent]
})
export class AppModule { }
