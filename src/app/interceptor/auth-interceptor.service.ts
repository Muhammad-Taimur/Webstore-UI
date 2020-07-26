import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { ObservableInput, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor{

  constructor() { }
  
  intercept(req: HttpRequest<any>, next: HttpHandler):Observable <HttpEvent<any>>{
    // const token = JSON.parse(localStorage.getItem('user'))
    let token = JSON.parse(localStorage.getItem('user'))

    if (token){
      const cloned = req.clone({
        headers: req.headers .set("Authorization","Bearer "+ token.access_token)
      })

      return next.handle(cloned)
    }
    else{
      return next.handle(req)
    }
  }
}
