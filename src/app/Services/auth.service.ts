import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError as observableThrowError ,Observable, ObservableInput } from 'rxjs';
import { Itoken } from 'src/app/Models/IToken';
import { ProductService } from './product.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public productservice = []
  public errMsg;
  private registerApi = 'https://localhost:44362/api/Account/Register'
  private loginApi = 'https://localhost:44362/token'

  //errorHandler: (err: any, caught: Observable<any>) => ObservableInput<any>;
  
  constructor(private http: HttpClient,
    private _productservice:ProductService,
    private _router:Router) { }


//Signup Method
register(data) :Observable<any>{
return this.http.post<any>(this.registerApi,data,{observe : 'response'})
.pipe(
  catchError(this.errorHandler)
);
}

//Signin Method
login (username:string, password: string):Observable<any>{
  
  //this is concatinating data in specific login post form
  let data = "grant_type=password&username="+username+"&password="+password;
  return this.http.post<any>(this.loginApi,data,{observe : 'response'})
  .pipe(
    catchError(this.errorHandler)
  )

}
//Error Handler
errorHandler(error: HttpErrorResponse ){
  //  return observableThrowError(error.message || "Yesh Server Ka Error")

  let errorMessage = [];
  
  if (error.error instanceof ErrorEvent) {

    // client-side error

    errorMessage[0] = `Error: ${error.error.message}`;

  } else {

    // server-side error

    errorMessage[0] = `Error Code: ${error.status}`;
    errorMessage[1] = error.error;
    //console.log(error.message[1])
       }

  //window.alert(errorMessage);

  return observableThrowError(errorMessage);
  //return observableThrowError(error.error && error.message && error.status);
  
  }


  //Check user is Logged in or Not
  loggedIn(){
    // let localStorageObject = JSON.parse(localStorage.getItem('user'))
    // return !! localStorageObject.access_token
    // if (JSON.parse(localStorage.getItem('user')) === )
    return !!JSON.parse(localStorage.getItem('user'))
  }

     
 
//       isAuthorized(){
//         return this.checkAuthorize()
//       }
    }

  

// }