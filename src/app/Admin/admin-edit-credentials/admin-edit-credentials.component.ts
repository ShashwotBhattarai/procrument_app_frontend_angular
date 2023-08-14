import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PutUserService } from 'src/app/services/admin-put-user.service';
import { GetAllSitesAndItemsService } from 'src/app/services/get-all-sites.service';

@Component({
  selector: 'app-admin-edit-credentials',
  templateUrl: './admin-edit-credentials.component.html',
  styleUrls: ['./admin-edit-credentials.component.css']
})
export class AdminEditCredentialsComponent {
  constructor(
    private getAllSitesAndItemsService: GetAllSitesAndItemsService,
    private putUserService: PutUserService,
    private router: Router
  ) {}
  userOptions: any;

  async callFetchService() {
    let fetchedItemsOptions =
      await this.getAllSitesAndItemsService.getAllUsers();
      
    this.userOptions = fetchedItemsOptions;
  }

  editUserForm = new FormGroup({
    user_id: new FormControl('', [Validators.required]),
    fullname: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    role: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
    this.callFetchService();
  }

  async onSubmit() {
    if (this.editUserForm.valid) {
      const formData = this.editUserForm.value;
      console.log(formData);
      const user_id = formData.user_id;
      const updatedUser = {
        fullname: formData.fullname,
        username: formData.username,
        password: formData.password,
        role: formData.role
      };
      const response = await this.putUserService.putUser(user_id, updatedUser);
      if (response == true) {
        this.router.navigate(['admin/dashboard']);
      }
    } else {
      // Form is not valid, show error messages or take appropriate action
      console.log('Form is invalid');
    }
  }

}
