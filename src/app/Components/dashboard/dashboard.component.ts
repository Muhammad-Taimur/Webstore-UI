import { Component, OnInit } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { ProductService } from 'src/app/Services/product.service';
import { Observable } from 'rxjs';
// import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public productservice = []
  public errMsg;

  constructor(private _productservice:ProductService) { }

  ngOnInit(): void {

    this._productservice.getProduct()
    .subscribe((data) => {
      this.productservice = data;
    console.log(data.body)
    // console.log(data)
    },
    error => {this.errMsg = error,
    console.log(error)});
  }

}
