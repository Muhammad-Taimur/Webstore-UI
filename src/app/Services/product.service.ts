import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError as observableThrowError ,Observable, ObservableInput, Subject } from 'rxjs';
import { Itoken } from 'src/app/Models/IToken';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public id;
  private productApi = 'https://localhost:44362/Api/Products'
  private orderApi= 'https://localhost:44362/Api/orders'

  constructor(private http: HttpClient) { }


//Get Product Api
getProduct():Observable<any>{
  return this.http.get<any>(this.productApi,{observe: 'response'})
  .pipe(
    catchError(this.errorHandler)
  );
}


//Post Product Api
postProduct(data) :Observable<any>{
  return this.http.post<any>(this.productApi,data,{observe : 'response'})
  .pipe(
    catchError(this.errorHandler)
  );
  }

  
  //Error Handler
  errorHandler(error: HttpErrorResponse){
    return observableThrowError(error || "Server Error")
  }
  // errorHandler(error: HttpErrorResponse ){
  //    return observableThrowError(error || "Yesh Server Ka Error")
  //    console.log(error)
  // }

private getproductId = new Subject<string>();
getproductId$ = this.getproductId.asObservable();

getProductIdforApi(id:string){
  this.getproductId.next(id)
  console.log("Received Product ID "+id)
}

getProductIdAPI(id:string):Observable<any>{
  return  this.http.get<any>(this.productApi+"/"+id)
  .pipe(
    catchError(this.errorHandler)
  );
}


}
