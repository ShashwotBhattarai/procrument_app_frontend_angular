import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { RequirementComponent } from './User/requirement/requirement.component';
import { AdminDashboardComponent } from './Admin/dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './User/dashboard/user-dashboard.component';
import { AddNewItemComponent } from './Admin/items/add-new-item/add-new-items.component';
import { AddNewSiteComponent } from './Admin/sites/add-new-site/add-new-site.component';
import { AddNewUserComponent } from './Admin/users/add-new-user/add-new-users.component';
import { EditItemComponent } from './Admin/items/edit-item/edit-item.component';
import { DeleteItemComponent } from './Admin/items/delete-item/delete-item.component';
import { EditSiteComponent } from './Admin/sites/edit-site/edit-site.component';
import { EditUserComponent } from './Admin/users/edit-user/edit-user.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'admin/dashboard', component: AdminDashboardComponent },
  { path: 'user/dashboard', component: UserDashboardComponent},
  { path: 'user/requirement', component: RequirementComponent},
  { path: 'admin/items', component: AddNewItemComponent},
  { path: 'admin/site', component: AddNewSiteComponent},
  { path: 'admin/credentials', component: AddNewUserComponent},
  { path: 'admin/editItems', component: EditItemComponent},
  { path: 'admin/deleteItems', component: DeleteItemComponent},
  { path: 'admin/editSite', component: EditSiteComponent},
  { path: 'admin/editUser', component: EditUserComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
