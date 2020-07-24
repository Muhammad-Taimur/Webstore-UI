import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from 'src/app/Services/product.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  selectedFiles :File  = null;
  public productservice = []
  public errMsg;

  formregister = new FormGroup({
  
    firstname : new FormControl('',
    [Validators.required]),
  
    lastname : new FormControl('',
    [Validators.required]),
  
    email : new FormControl('',
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
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  uploadFile(fl){
    this.selectedFiles = fl.target.files[0];
    console.log(this.selectedFiles);
  }


  submit(){
    const obj = new FormData();

    obj.append('name',this.formregister.value.firstname),
    obj.append('category',this.formregister.value.lastname),
    obj.append('details',this.formregister.value.email),
    obj.append('',this.selectedFiles);

    console.log(obj)

    this._productservice.postProduct(obj)
    .subscribe((data)=> {
      this.productservice = data,
      console.log(this.productservice)
      if(data.status === 201){
        this.router.navigate(['dashboard']);
        this.toastr.success('Sucessfully Login','Sucessful',{
          tapToDismiss:true
        })
      }
    },
    (error) => {
      this.errMsg = error,
      console.log(error)
    }
    )

  }
}
