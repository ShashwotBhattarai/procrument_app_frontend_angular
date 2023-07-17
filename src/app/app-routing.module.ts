import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserRequirementComponent } from './user-requirement/user-requirement.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'admin/dashboard', component: AdminDashboardComponent },
  { path: 'user/dashboard', component: UserDashboardComponent},
  { path: 'user/requirement', component: UserRequirementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
