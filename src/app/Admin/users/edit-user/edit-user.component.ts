import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PutUserService } from 'src/app/services/admin-put-user.service';
import { GetAllSitesAndItemsService } from 'src/app/services/get-all-sites.service';

@Component({
  selector: 'app-admin-edit-credentials',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {
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
    console.log(this.userOptions);
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
    this.editUserForm.get('user_id')?.valueChanges.subscribe(selectedUserId => {
      const selectedUser = this.userOptions.find((user: { id: string }) => user.id === selectedUserId);
      if (selectedUser) {
        this.editUserForm.patchValue({
          fullname: selectedUser.fullname,
          username: selectedUser.username,
          password: selectedUser.password,
          role: selectedUser.role,
        });
      }
    });
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
