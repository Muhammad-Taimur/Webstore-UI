import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/Services/auth.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public authservice = []
  public errMsg;
  

  formlogin = new FormGroup({
    name: new FormControl('',
    [Validators.required]),
  
    password : new FormControl('',
    [Validators.required])
  })

  constructor(private router: Router,
    private toastr: ToastrService,
    private _authservice: AuthService,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
  }
  submit(){

    this.spinner.show();
    
    this._authservice.login(this.formlogin.value.name, this.formlogin.value.password)
    .subscribe((data) =>
    {
      this.authservice=data
      //console.log(this.authservice)
      // if(data.status === 200){
      //   this.toastr.success('Login','Successfully')
      //       }
      if(data.status === 200){
        this.router.navigate(['dashboard']);
        this.toastr.success('Sucessfully Login','Sucessful',{
          tapToDismiss:true
        })
      }
      
      this.spinner.hide();

    
      console.log(data)
      console.log(data.status)
      console.log(data.body.access_token)
      console.log(data.body)

      //setting full Object in Localstroage
      localStorage.setItem ('user',JSON.stringify(data.body))

      //Getting Full Object from Local Storage
      JSON.parse(localStorage.getItem('user'))

      //to clear the localstorage 
      //localStorage.clear()
    },
    (error) => {this.errMsg = error
      //    console.log("Invalid User Name and Password" + error)}

      
          
          this.spinner.hide();
          console.log(error[1].error_description)
          console.log(error)
          this.toastr.error( error[1].error_description,'Oops!',
          {
            closeButton : true
    
          });
        }
          
    );

    console.log(this.formlogin)
    console.log(this.formlogin.value)
  }

}
