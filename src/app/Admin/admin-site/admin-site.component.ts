import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { PostSiteService } from 'src/app/services/admin-addNewSite.service';

@Component({
  selector: 'app-admin-site',
  templateUrl: './admin-site.component.html',
  styleUrls: ['./admin-site.component.css']
})
export class AdminSiteComponent {
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
