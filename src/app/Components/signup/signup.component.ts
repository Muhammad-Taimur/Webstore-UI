import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public authservice = []
  public errMsg;
  public passwordMatchValidator;

  constructor(private _authservice: AuthService,
    private router: Router,
    private toastr: ToastrService) { }

formregister = new FormGroup({
  
  firstname : new FormControl('',
  [Validators.required]),

  lastname : new FormControl('',
  [Validators.required]),

  email : new FormControl('',
  [Validators.required]),

  password: new FormControl('',
    [Validators.required]),
   
    confirmpassword: new FormControl('',
    [Validators.required])
})

  ngOnInit(): void {
  }


  submit(){
    var message = document.getElementById('error-nwl');

    //var password = "123456"
if(this.formregister.value.password.length < 6){
    message.innerHTML = " you have to enter at least 6 digit!"
}
    // console.log(this.formregister)
    console.log(this.formregister.value)

    this._authservice.register(this.formregister.value)
    .subscribe((data)=>{
      this.authservice= data,
      console.log(this.authservice);
      console.log(data.status);
      
      //if satus code is ok it will Navigate to Login Page
      if(data.status === 200){
        this.router.navigate(['login']);

        //toast the message
        this.toastr.success( 'Your account is created successfully','Congrats!',{
          closeButton : true
        });
      }
    },

    (error) => {this.errMsg = error //,
     //console.log(this.errMsg)
      console.log(error[0])
      //  console.log(error[1].modelState.error[1])
      //  console.log(this.errMsg)
      

      //  if (this.errMsg[0] === "Error Code: 400"  && this.errMsg[1].modelState.error[1] === 'Email '+"'"+this.formregister.value.email+"'"+' is already taken.'){
        // console.log(error[1].modelState.error[1])
      //console.log(error.modelState["model.ConfirmPassword"][0])
      //console.log(error.modelState["model.Password"][0])
     // console.log(error.modelState.error[0])
    //}


      //console.log(error.modelState)
      
             if(this.formregister.value.password !== this.formregister.value.confirmpassword){
        //console.log(error.modelState["model.Password"][0])
        console.log(error[1].modelState["model.ConfirmPassword"][0])
        this.toastr.error( error[1].modelState["model.ConfirmPassword"][0],'Oops!',
        {
          closeButton : true
        });
      }
     
      // else if(this.formregister.value.password.length !== password.length ){
      //   console.log(error[1].modelState["model.Password"][0])
      // }
      //else if (this.errMsg[0] === "Error Code: 400"  )     {
        // console.log(error[1].modelState.error[1])
      //console.log(error.modelState["model.ConfirmPassword"][0])
      //console.log(error.modelState["model.Password"][0])
     // console.log(error.modelState.error[0])
    //}
   else if (this.errMsg[0] === "Error Code: 400"  && this.errMsg[1].modelState.error[1] === 'Email '+"'"+this.formregister.value.email+"'"+' is already taken.'){
      console.log(error[1].modelState.error[1])
      this.toastr.error( error[1].modelState.error[1],'Oops!',
      {
        closeButton : true

      });
   //console.log(error.modelState["model.ConfirmPassword"][0])
   //console.log(error.modelState["model.Password"][0])
  // console.log(error.modelState.error[0])
 }
    }
    
    );
    
  }

}
