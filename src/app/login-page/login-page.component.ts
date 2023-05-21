import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
 loginForm!:FormGroup 
 constructor(private formbuilder:FormBuilder){

 }
  ngOnInit(){
    this.loginForm=this.formbuilder.group({
      email:['',[Validators.required, Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]]
  })
}
 

onSubmit(){
  if (this.loginForm.invalid){
    return;
  }

console.log(this.loginForm)
}
}