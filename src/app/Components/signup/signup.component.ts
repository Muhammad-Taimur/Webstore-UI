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
    },

    (error) => {this.errMsg = error,
      console.log(error.message)
    
      //console.log(error.modelState["model.ConfirmPassword"][0])
      //console.log(error.modelState["model.Password"][0])
      console.log(error.modelState.error[1])
    }
    );
    
  }

}
