import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from 'src/app/Services/product.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  // selectedFiles :File  = null;
  myFiles:string [] = [];
  public productservice = []
  public errMsg;
  public urls =[]

  formregister = new FormGroup({
  
    firstname : new FormControl('',
    [Validators.required]),
  
    lastname : new FormControl('',
    [Validators.required]),
  
    email : new FormControl('',
    [Validators.required]),
    
    img_file: new FormControl('',
    [Validators.required])

    // image: new FormControl('',
    // [Validators.required])
  
  //   password: new FormControl('',
  //     [Validators.required]),
     
  //     confirmpassword: new FormControl('',
  //     [Validators.required])
  })
  

  constructor(private _productservice:ProductService,
    private router: Router,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    
  }
  uploadFile(fl){
    // this.selectedFiles = fl.target.files[0];
    // console.log(this.selectedFiles);

    for (var i = 0; i < fl.target.files.length; i++) { 
      this.myFiles.push(fl.target.files[i]);
      var reader = new FileReader();
        reader.readAsDataURL(fl.target.files[i]);
        reader.onload=(event:any)=>{
          this.urls.push(event.target.result)
      console.log(this.myFiles);
    }
  }


    // Adding Multiple Files
    // if(fl.target.files){
    //   for (let i=0; i<File.length; i++){
    //     this.selectedFiles=fl.target.files[i];
    //     var reader = new FileReader();
    //     reader.readAsDataURL(fl.target.files[i]);
    //     reader.onload=(event:any)=>{
    //       this.urls.push(event.target.result)
    //       console.log(this.selectedFiles);
    //     }
    //   }
    // }
  }


  submit(){
    this.spinner.show()
    const obj = new FormData();

    obj.append('name',this.formregister.value.firstname),
    obj.append('category',this.formregister.value.lastname),
    obj.append('details',this.formregister.value.email)

    for (var i = 0; i < this.myFiles.length; i++) { 
    obj.append('',this.myFiles[i]);
    }

    console.log(obj)

    this._productservice.postProduct(obj)
    .subscribe((data)=> {
      this.productservice = data,
      this.spinner.show();
      console.log(this.productservice)
      
      if(data.status === 201){
        
        this.spinner.hide();
        this.router.navigate(['dashboard']);
        this.spinner.hide()
        this.toastr.success('Your Product is Added!','Congrats',{
          tapToDismiss:true
        })
      }
    },
    (error) => {
      this.errMsg = error
      this.spinner.hide()
      console.log(error)
    }
    )

  }
}
