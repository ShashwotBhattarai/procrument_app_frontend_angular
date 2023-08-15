import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent {
  constructor(private router:Router){}
  
  handleAddNewItem() {
    this.router.navigate(['admin/items']);
  }

  handleEditItem() {
    this.router.navigate(['admin/editItems']);
  }

  handleAddNewSite() {
    this.router.navigate(['admin/site']);
  }
  handleEditSite() {
    this.router.navigate(['admin/editSite']);
  }

  handleAddNewUserCredentials() {
    this.router.navigate(['admin/credentials']);
  }

  handleEditUserCredentials() {
    this.router.navigate(['admin/editUser']);
  }
}
