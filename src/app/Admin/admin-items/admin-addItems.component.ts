import { Component } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostItemService } from 'src/app/services/admin_addNewItem.service';


@Component({
  selector: 'app-admin-items',
  templateUrl: './admin-items.component.html',
  styleUrls: ['./admin-items.component.css'],

})
export class AdminItemsComponent {
 

  constructor(private postItemService:PostItemService, private router:Router){}

  addItemsForm= new FormGroup({
    item_name: new FormControl('', [Validators.required]),
    item_specification: new FormControl('', [Validators.required]),
    item_make: new FormControl('', [Validators.required]),
    item_unit: new FormControl('', [Validators.required])

  });

  async onSubmit(){

    if (this.addItemsForm.valid) {
      const formData = this.addItemsForm.value;
    console.log(formData);
    const response= await this.postItemService.postItem(formData
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
