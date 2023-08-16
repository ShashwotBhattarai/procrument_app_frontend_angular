import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PutItemService } from 'src/app/services/put-item.service';
import { GetInfoService } from 'src/app/services/get-info.service';

@Component({
  selector: 'app-admin-edit-items',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css'],
})
export class EditItemComponent {
  constructor(
    private getInfoService: GetInfoService,
    private putItemService: PutItemService,
    private router: Router
  ) {}
  itemOptions: any;

  async callFetchService() {
    let fetchedItemsOptions =
      await this.getInfoService.getAllItems();
    this.itemOptions = fetchedItemsOptions;
  }

  editItemsForm = new FormGroup({
    item_id: new FormControl('', [Validators.required]),
    item_name: new FormControl('', [Validators.required]),
    item_specification: new FormControl('', [Validators.required]),
    item_make: new FormControl('', [Validators.required]),
    item_unit: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
    this.callFetchService();
    this.editItemsForm.get('item_id')?.valueChanges.subscribe(selectedItemId => {
      const selectedItem = this.itemOptions.find((item: { id: string }) => item.id === selectedItemId);
      if (selectedItem) {
        this.editItemsForm.patchValue({
          item_name: selectedItem.name,
          item_specification: selectedItem.spec,
          item_make: selectedItem.make,
          item_unit: selectedItem.unit
        });
      }
    });
  }

  async onSubmit() {
    if (this.editItemsForm.valid) {
      const formData = this.editItemsForm.value;
      console.log(formData);
      const item_id = formData.item_id;
      const updatedItem = {
        item_name: formData.item_name,
        item_specification: formData.item_specification,
        item_make: formData.item_make,
        item_unit: formData.item_unit,
      };
      const response = await this.putItemService.putItem(item_id, updatedItem);
      if (response == true) {
        this.router.navigate(['admin/dashboard']);
      }
    } else {
      // Form is not valid, show error messages or take appropriate action
      console.log('Form is invalid');
    }
  }
}
