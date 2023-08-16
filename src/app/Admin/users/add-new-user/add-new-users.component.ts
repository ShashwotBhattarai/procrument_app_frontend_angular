import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostCredentialService } from 'src/app/services/admin-addnewCredential.service';


@Component({
  selector: 'app-admin-credentials',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.css']
})
export class AddNewUserComponent {
  constructor(private postCredentialService:PostCredentialService, private router:Router){}

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
    const response= await this.postCredentialService.postCredential(formData
    );
    if(response==true){
      this.router.navigate(['admin/dashboard']); 
    }

    } else {
      
      console.log('Form is invalid');
    }
    
    
}


}
