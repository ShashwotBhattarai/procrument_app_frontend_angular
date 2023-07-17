import { Component } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin-items',
  templateUrl: './admin-items.component.html',
  styleUrls: ['./admin-items.component.css']
})
export class AdminItemsComponent {

  addItemsForm= new FormGroup({
    Name: new FormControl(''),
    Specifications: new FormControl(''),
    Make: new FormControl(''),
    Unit: new FormControl('')

  });

}
