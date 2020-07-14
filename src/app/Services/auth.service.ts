import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError as observableThrowError ,Observable, ObservableInput } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private registerApi = 'https://localhost:44362/api/Account/Register'
  //errorHandler: (err: any, caught: Observable<any>) => ObservableInput<any>;
  
  constructor(private http: HttpClient) { }



register(data) :Observable<any>{
return this.http.post<any>(this.registerApi,data,{observe : 'response'})
.pipe(
  catchError(this.errorHandler)
);
}

errorHandler(error: HttpErrorResponse ){
  //  return observableThrowError(error.message || "Yesh Server Ka Error")

  let errorMessage = '';

  if (error.error instanceof ErrorEvent) {

    // client-side error

    errorMessage = `Error: ${error.error.message}`;

  } else {

    // server-side error

    //errorMessage = `Error Code: ${error.status}\nMessage: ${error.error}`;
    errorMessage =`${error.error}`

  }

  //window.alert(errorMessage);

  return observableThrowError(errorMessage);
  //return observableThrowError(error.error && error.message && error.status);
  
  }

}