import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public authservice = []
  public errMsg;
  public passwordMatchValidator;

  constructor(private _authservice: AuthService) { }

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

    // console.log(this.formregister)
    console.log(this.formregister.value)

    this._authservice.register(this.formregister.value)
    .subscribe((data)=>{
      this.authservice= data,
      console.log(this.authservice);
      console.log(data.status);
    },

    (error) => {this.errMsg = error //,
     //console.log(this.errMsg)
      console.log(error[0])
      //  console.log(error[1].modelState.error[1])
      //  console.log(this.errMsg)
      var password = "123456"

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
   //console.log(error.modelState["model.ConfirmPassword"][0])
   //console.log(error.modelState["model.Password"][0])
  // console.log(error.modelState.error[0])
 }
    }
    
    );
    
  }

}
