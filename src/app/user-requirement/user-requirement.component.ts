import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GetAllSitesAndItemsService } from '../services/get-all-sites.service';

@Component({
  selector: 'app-user-requirement',
  templateUrl: './user-requirement.component.html',
  styleUrls: ['./user-requirement.component.css'],
})
export class UserRequirementComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private getAllSitesAndItemsService: GetAllSitesAndItemsService
  ) {}
  nestedForm!: FormGroup;

  // Sample data for autocomplete options
  siteOptions: any;

  itemOptions:any;
  async callFetchService() {
    let fetchedSiteOptions = await this.getAllSitesAndItemsService.getAllSites();
    this.siteOptions = fetchedSiteOptions;
    console.log(fetchedSiteOptions);
      let fetchedItemsOptions= await this.getAllSitesAndItemsService.getAllItems();
      this.itemOptions=fetchedItemsOptions;
      console.log(fetchedItemsOptions);
  }

  ngOnInit(): void {
    this.callFetchService();

    this.nestedForm = this.formBuilder.group({
      innerFields: this.formBuilder.array([]), // FormArray for dynamically generated form groups
    });

    // Add an initial nested form group
    this.addNestedFormGroup();
  }

  get innerFields(): FormArray {
    return this.nestedForm.get('innerFields') as FormArray;
  }

  createNestedFormGroup(): FormGroup {
    return this.formBuilder.group({
      innerField1: ['', Validators.required],
      innerField2: ['', Validators.required],
      innerField3: ['', Validators.required],
      innerField4: ['', Validators.required],
    });
  }

  addNestedFormGroup(): void {
    const nestedFormGroup = this.createNestedFormGroup();
    this.innerFields.push(nestedFormGroup);
    this.nestedForm.updateValueAndValidity();
  }

  removeNestedFormGroup(index: number): void {
    this.innerFields.removeAt(index);
    this.nestedForm.updateValueAndValidity();
  }

  onSubmit(): void {
    if (1) {
      // Handle form submission
      console.log('inside on submit');
      const formData = this.nestedForm.value;
      console.log(formData);
      // You can perform further actions, like sending the data to the server.
    }
  }
}
