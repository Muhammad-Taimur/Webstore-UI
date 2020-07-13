import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formlogin = new FormGroup({
    name: new FormControl('',
    [Validators.required]),
  
    password : new FormControl('',
    [Validators.required])
  })

  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    
    console.log(this.formlogin)
    console.log(this.formlogin.value)
  }

}
