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
  public productserviceid 
  public errMsg;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  galleryImages1: NgxGalleryImage
  public name;
  public productBlob= [];
  public imagePath;

  constructor(private _productservice:ProductService,
    private router: Router,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService) { }

    //test
    
  ngOnInit(): void {

//  this._productservice.getProduct()
//         .subscribe((data) => {
//           this.productservice = data.body;
//           // this.imageBlob = data.body
//           let json = JSON.parse(JSON.stringify(data.body))
//          console.log(json)
//         for (var i =0; i < json.length; i++){
//         console.log(data.body[i].productBlob[i])
//          this.galleryImages = [
//           {
//             small: 'assets/1.jpg',
//             medium: 'assets/1.jpg',
//             big: 'assets/1.jpg'
//           },
//           {
//             small: 'assets/2.jpg',
//             medium: 'assets/2.jpg',
//             big: 'assets/3.jpg'
//           }
//         ];
//       }
//         },
//         error => {this.errMsg = error,
//           this.spinner.hide()
//         console.log(error)});

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

// this.galleryImages = [
//   {
//     small: 'https://localhost:44362/images/fe24e174-5f01-43a0-8ae2-c0e952bce297.jpg',
//     medium: 'https://localhost:44362/images/fe24e174-5f01-43a0-8ae2-c0e952bce297.jpg',
//     big: 'https://localhost:44362/images/fe24e174-5f01-43a0-8ae2-c0e952bce297.jpg'
// }
// ];

let newGalleryImages = []

this._productservice.getproductId$

        .subscribe((data) => {
          this.productserviceid = data
        console.log("Yea Ander Api ki Id h "+this.productserviceid)
        }, error => {
          this.errMsg = error,
          console.log(error)
        })
        console.log("Yea BAHAR Api ki Id h "+ JSON.stringify(this.productserviceid))
        
        
        this._productservice.getProductIdAPI(this.productserviceid)
        .subscribe((data1)=> {
          this.productservice = data1
          
          console.log("Yea Api Ki ID Ka DATA H "+data1[0].name )

          console.log("Yea Api Ki ID Ka DATA H "+JSON.stringify(data1[0]) )

          // for(var i = 0; i < data[0].productBlob.length; i++ ){
          // console.log("Pora Data with ID "+data[0].productBlob[i].imagePath)
          // console.log("Pora Data with ID "+JSON.stringify(data))
          
          for(var i = 0; i < data1[0].productBlob.length; i++ ){}

        //   const image = 
        //     {
        //       small: data1[0].productBlob[i].imagePath,
        //       medium: data1[0].productBlob[i].imagePath,
        //       big: data1[0].productBlob[i].imagePath
        // }
        //   newGalleryImages.push(image)
        //   console.log("Bhr Wala  Ander" + JSON.stringify(image))
          // console.log("Chal Ja image gallery "+JSON.stringify(this.galleryImages))
          
        // }
        },
        error => {
          this.errMsg = error,
          console.log(error)
        })


              // },
              // error => {
              //   this.errMsg = error,
              //   console.log(error)});  

              //   console.log("And kei ID"+this.productserviceid)

              //   // console.log("Bhr Wala  newGalleryImages" + newGalleryImages)
              //   this.galleryImages = newGalleryImages

                // console.log(JSON.stringify(this.productservice[0]) )
              // console.log("DKh raha hu k aya yea nhe "+this.productserviceid)
// this._productservice.getProductIdAPI(this.productserviceid)

// .subscribe((data) => {
//   this.productservice = data
//   console.log("Pora Data with ID "+this.productserviceid)
// })

    // this.galleryOptions = [
    //   {
    //     width: '600px',
    //     height: '400px',
    //     thumbnailsColumns: 4,
    //     imageAnimation: NgxGalleryAnimation.Slide,
    //     arrowPrevIcon: 'fa fa-chevron-left',
    //     arrowNextIcon: 'fa fa-chevron-right',
    //   },
    //   // max-width 800
    //   {
    //     breakpoint: 800,
    //     width: '100%',
    //     height: '600px',
    //     imagePercent: 80,
    //     thumbnailsPercent: 20,
    //     thumbnailsMargin: 20,
    //     thumbnailMargin: 20
    //   },
    //   // max-width 400
    //   {
    //     breakpoint: 400,
    //     preview: false
    //   }
    // ];

    // this.galleryImages = [
    //   {
    //     small: 'https://localhost:44362/images/fe24e174-5f01-43a0-8ae2-c0e952bce297.jpg',
    //     medium: 'https://localhost:44362/images/fe24e174-5f01-43a0-8ae2-c0e952bce297.jpg',
    //     big: 'https://localhost:44362/images/fe24e174-5f01-43a0-8ae2-c0e952bce297.jpg'
    //   },
    //   {
    //     small: 'assets/2.jpg',
    //     medium: 'assets/2.jpg',
    //     big: 'assets/3.jpg'
    //   }
    // ];
    console.log("ID Bhr check krna "+this.productserviceid)

  }

}
