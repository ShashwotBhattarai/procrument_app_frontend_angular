import { Component,Inject } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { LoginAuthenticationService } from '../services/login-authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  constructor(private loginService:LoginAuthenticationService,private router: Router){}
  
  loginForm= new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });
 
   async userLogin(){
    let response_info:any= await this.loginService.login(this.loginForm.value.username,this.loginForm.value.password); 
    if (response_info.status==true&&response_info.role=='admin'){
      this.router.navigate(['admin/dashboard']);
    }
    else if(response_info.status==true&&response_info.role=='user'){
      this.router.navigate(['user/dashboard']);
    }
    
  }
}
