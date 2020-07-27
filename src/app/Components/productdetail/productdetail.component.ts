import { Component, OnInit } from '@angular/core';
import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';
import { ProductService } from 'src/app/Services/product.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.scss']
})
export class ProductdetailComponent implements OnInit {
  
  public productservice = []
  public errMsg;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  public name;
  public productBlob= [];
  public imagePath;

  constructor(private _productservice:ProductService,
    private router: Router,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService) { }

    //test
    
  ngOnInit(): void {

 this._productservice.getProduct()
        .subscribe((data) => {
          this.productservice = data.body;
          // this.imageBlob = data.body
          let json = JSON.parse(JSON.stringify(data.body))
         console.log(json)
        for (var i =0; i < json.length; i++){
        console.log(data.body[i].productBlob[i])
         this.galleryImages = [
          {
            small: 'assets/1.jpg',
            medium: 'assets/1.jpg',
            big: 'assets/1.jpg'
          },
          {
            small: 'assets/2.jpg',
            medium: 'assets/2.jpg',
            big: 'assets/3.jpg'
          }
        ];
      }
        },
        error => {this.errMsg = error,
          this.spinner.hide()
        console.log(error)});





    this.galleryOptions = [
      {
        width: '600px',
        height: '400px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        arrowPrevIcon: 'fa fa-chevron-left',
        arrowNextIcon: 'fa fa-chevron-right',
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.galleryImages = [
      {
        small: 'assets/1.jpg',
        medium: 'assets/1.jpg',
        big: 'assets/1.jpg'
      },
      {
        small: 'assets/2.jpg',
        medium: 'assets/2.jpg',
        big: 'assets/3.jpg'
      }
    ];

  }

}
