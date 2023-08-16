import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { PostSiteService } from 'src/app/services/admin-addNewSite.service';

@Component({
  selector: 'app-admin-site',
  templateUrl: './add-new-site.component.html',
  styleUrls: ['./add-new-site.component.css']
})
export class AddNewSiteComponent {
  constructor(private postSiteService:PostSiteService, private router:Router){}

  addSiteForm= new FormGroup({
    site_name: new FormControl('', [Validators.required]),
    site_location: new FormControl('', [Validators.required]),
    site_manager_name: new FormControl('', [Validators.required]),
   

  });

  async onSubmit(){

    if (this.addSiteForm.valid) {
      const formData = this.addSiteForm.value;
    console.log(formData);
    const response= await this.postSiteService.postSite(formData
    );
    if(response==true){
      this.router.navigate(['admin/dashboard']); 
    }

    } else {
      // Form is not valid, show error messages or take appropriate action
      console.log('Form is invalid');
    }
    
    
}

}
