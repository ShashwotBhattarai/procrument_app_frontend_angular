import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostUserService } from 'src/app/services/post-user.service';


@Component({
  selector: 'app-admin-credentials',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.css']
})
export class AddNewUserComponent {
  constructor(private postUserService:PostUserService, private router:Router){}

  addCredentialForm= new FormGroup({
    fullname: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    role: new FormControl('', [Validators.required])

  });

  async onSubmit(){

    if (this.addCredentialForm.valid) {
      const formData = this.addCredentialForm.value;
    console.log(formData);
    const response= await this.postUserService.postCredential(formData
    );
    if(response==true){
      this.router.navigate(['admin/dashboard']); 
    }

    } else {
      
      console.log('Form is invalid');
    }
    
    
}


}
