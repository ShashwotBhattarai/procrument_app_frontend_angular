import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-requirement',
  templateUrl: './user-requirement.component.html',
  styleUrls: ['./user-requirement.component.css'],
})
export class UserRequirementComponent implements OnInit {
  nestedForm!: FormGroup;
  

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.nestedForm = this.formBuilder.group({
      outerField: ['', Validators.required],
      innerFields: this.formBuilder.array([])
    });

    // Add an initial nested form group
    this.addNestedFormGroup();
  }

  get innerFields(): FormArray {
    return this.nestedForm.get('innerFields') as FormArray;
  }

  addNestedFormGroup(): void {
    const nestedFormGroup = this.formBuilder.group({
      innerField1: ['', Validators.required],
      innerField2: ['', Validators.required]
    });

    this.innerFields.push(nestedFormGroup);
  }

  removeNestedFormGroup(index: number): void {
    this.innerFields.removeAt(index);
  }

  onSubmit(): void {
    if (this.nestedForm.valid) {
      // Handle form submission
    }
  }
}



