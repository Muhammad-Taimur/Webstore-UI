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



register(data){
return this.http.post<any>(this.registerApi,data)
.pipe(
  catchError(this.errorHandler)
);
}

errorHandler(error: HttpErrorResponse){
  //  return observableThrowError(error.message || "Yesh Server Ka Error")
  return observableThrowError(error.error || "Yesh Server Ka Error")
  }

}