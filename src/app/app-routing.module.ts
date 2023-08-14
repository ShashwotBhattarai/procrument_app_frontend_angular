import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { UserRequirementComponent } from './User/user-requirement/user-requirement.component';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './User/user-dashboard/user-dashboard.component';
import { AdminItemsComponent } from './Admin/admin-items/admin-items.component';
import { AdminSiteComponent } from './Admin/admin-site/admin-site.component';
import { AdminCredentialsComponent } from './Admin/admin-credentials/admin-credentials.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'admin/dashboard', component: AdminDashboardComponent },
  { path: 'user/dashboard', component: UserDashboardComponent},
  { path: 'user/requirement', component: UserRequirementComponent},
  { path: 'admin/items', component: AdminItemsComponent},
  { path: 'admin/site', component: AdminSiteComponent},
  { path: 'admin/credentials', component: AdminCredentialsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
