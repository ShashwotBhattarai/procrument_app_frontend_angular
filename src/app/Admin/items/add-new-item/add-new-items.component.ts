import { Component } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostItemService } from 'src/app/services/post-item.service';


@Component({
  selector: 'app-admin-items',
  templateUrl: './add-new-item.component.html',
  styleUrls: ['./add-new-item.component.css'],

})
export class AddNewItemComponent {
 

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
