import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserRequirementComponent } from './user-requirement/user-requirement.component';
import { AdminItemsComponent } from './admin-items/admin-items.component';
import { AdminSiteComponent } from './admin-site/admin-site.component';
import { AdminCredentialsComponent } from './admin-credentials/admin-credentials.component';

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
