import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-requirement',
  templateUrl: './user-requirement.component.html',
  styleUrls: ['./user-requirement.component.css'],
})
export class UserRequirementComponent implements OnInit {
  nestedForm!: FormGroup;

  // Sample data for autocomplete options
  siteOptions = [
    { id: 1, name: 'Site 1' },
    { id: 2, name: 'Site 2' },
    { id: 3, name: 'Site 3' },
  ];

  itemOptions = [
    { id: 1, name: 'Item A' },
    { id: 2, name: 'Item B' },
    { id: 3, name: 'Item C' },
  ];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.nestedForm = this.formBuilder.group({
      innerFields: this.formBuilder.array([]) // FormArray for dynamically generated form groups
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
      innerField4: ['', Validators.required]
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
    if (this.nestedForm.valid) {
    
      // Handle form submission
      console.log("inside on submit");
      const formData = this.nestedForm.value;
      console.log(formData);
      // You can perform further actions, like sending the data to the server.
    
  }
}
}
