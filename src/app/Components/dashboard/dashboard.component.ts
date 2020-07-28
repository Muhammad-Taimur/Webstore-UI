import { Component, OnInit } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { ProductService } from 'src/app/Services/product.service';
import { Observable } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
// import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public productservice = []
  public imageBlob =[]
  public errMsg;

  constructor(private _productservice:ProductService,
    private spinner: NgxSpinnerService,
    private _router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.spinner.show()

      this._productservice.getProduct()
        .subscribe((data) => {
          this.productservice = data.body;
          
          // this.imageBlob = data.body
        // console.log(this.imageBlob)
        this.spinner.hide()
        console.log(this.productservice)
        },
        error => {this.errMsg = error,
          this.spinner.hide()
this._router.navigate(["login"]);
this.toastr.error('Autorization Failed','Oops',{
  tapToDismiss:true
})
        console.log(error)});
        
        
        console.log("Ye BHR ka Data ha"+JSON.stringify(this.productservice))

      }

      onSelect(product){

        this._router.navigate(["/dashboard",product.productId])
        this._productservice.getProductIdforApi(product.productId)
        console.log("Sent Prodcut ID: "+product.productId)
      }

      
 
  
  //       this._productservice.getProduct()
  //   .subscribe((data) => {
  //     this.productservice = data.body;
  //     // this.imageBlob = data.body
  //   // console.log(this.imageBlob)
  //   // this.spinner.hide()
  //   console.log(this.productservice)
  //   },
  //   error => {this.errMsg = error,
  //     // this.spinner.hide()
  //   console.log(error)});
  // }
  
  
}
