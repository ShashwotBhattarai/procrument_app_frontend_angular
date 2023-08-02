import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GetAllSitesAndItemsService } from '../services/get-all-sites.service';
import { PostRequirementService } from '../services/post-requirement.service';
import { RequirementDto } from '../dto\'s/requirement.dto';

@Component({
  selector: 'app-user-requirement',
  templateUrl: './user-requirement.component.html',
  styleUrls: ['./user-requirement.component.css'],
})
export class UserRequirementComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private getAllSitesAndItemsService: GetAllSitesAndItemsService,
    private postRequirements: PostRequirementService
  ) {}
  nestedForm!: FormGroup;
  siteOptions: any;
  itemOptions: any;

  async callFetchService() {
    let fetchedSiteOptions =
      await this.getAllSitesAndItemsService.getAllSites();
    this.siteOptions = fetchedSiteOptions;

    let fetchedItemsOptions =
      await this.getAllSitesAndItemsService.getAllItems();
    this.itemOptions = fetchedItemsOptions;
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
      console.log('inside on submit');
      const formData = this.nestedForm.value;
      const requirementArray:[]= formData.innerFields;
      console.log(requirementArray);
      const payloadArray= this.mapToRequirementDto(requirementArray);
      this.postRequirements.postRequirement(payloadArray);

    }
  }

   mapToRequirementDto(inputArray: any[]): RequirementDto[] {
    return inputArray.map((item) => ({
      site_id: item.innerField1,
      item_id: item.innerField2,
      requirement_quantity: parseInt(item.innerField3, 10),
      requirement_delivery_date: item.innerField4, 
    }));
  }
}
