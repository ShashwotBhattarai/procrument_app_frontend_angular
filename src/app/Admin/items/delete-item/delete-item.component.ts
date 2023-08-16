import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DeleteItemService } from 'src/app/services/admin-delete-item.service';
import { GetAllSitesAndItemsService } from 'src/app/services/get-all-sites.service';

@Component({
  selector: 'app-admin-delete-item',
  templateUrl: './delete-item.component.html',
  styleUrls: ['./delete-item.component.css']
})
export class DeleteItemComponent {

  constructor(
    private getAllSitesAndItemsService: GetAllSitesAndItemsService,
    private deleteItemService: DeleteItemService,
    private router: Router
  ) {}
  itemOptions: any;

  async callFetchService() {
    let fetchedItemsOptions =
      await this.getAllSitesAndItemsService.getAllItems();
    this.itemOptions = fetchedItemsOptions;
  }

  deleteItemsForm = new FormGroup({
    item_id: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
    this.callFetchService();
  }

  async onSubmit() {
    if (this.deleteItemsForm.valid) {
      const formData = this.deleteItemsForm.value;
      console.log(formData);
      const item_id = formData.item_id;
      console.log(item_id);
      
      const response = await this.deleteItemService.deleteItem(item_id);
      if (response == true) {
        this.router.navigate(['admin/dashboard']);
      }
    } else {
      // Form is not valid, show error messages or take appropriate action
      console.log('Form is invalid');
    }
  }

}
