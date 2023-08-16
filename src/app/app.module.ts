import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './Admin/dashboard/admin-dashboard.component';
import { AddNewItemComponent } from './Admin/items/add-new-item/add-new-items.component';
import { AdminSupplierComponent } from './Admin/extra-features/suppliers/admin-supplier.component';
import { AddNewSiteComponent } from './Admin/sites/add-new-site/add-new-site.component';
import { AddNewUserComponent } from './Admin/users/add-new-user/add-new-users.component';
import { RequirementComponent } from './User/requirement/requirement.component';
import { AdminInquiryComponent } from './Admin/extra-features/admin-inquiry/admin-inquiry.component';
import { AdminRequirementsTrackerComponent } from './Admin/extra-features/admin-requirements-tracker/admin-requirements-tracker.component';
import { AdminRequirementsSendInquirySelectSuppliersComponent } from './Admin/extra-features/admin-requirements-send-inquiry-select-suppliers/admin-requirements-send-inquiry-select-suppliers.component';
import { AdminInquiryCompareComponent } from './Admin/extra-features/admin-inquiry-compare/admin-inquiry-compare.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserDashboardComponent } from './User/dashboard/user-dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { EditItemComponent } from './Admin/items/edit-item/edit-item.component';
import { DeleteItemComponent } from './Admin/items/delete-item/delete-item.component';
import { EditSiteComponent } from './Admin/sites/edit-site/edit-site.component';
import { EditUserComponent } from './Admin/users/edit-user/edit-user.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminDashboardComponent,
    AddNewItemComponent,
    AdminSupplierComponent,
    AddNewSiteComponent,
    AddNewUserComponent,
    RequirementComponent,
    AdminInquiryComponent,
    AdminRequirementsTrackerComponent,
    AdminRequirementsSendInquirySelectSuppliersComponent,
    AdminInquiryCompareComponent,
    UserDashboardComponent,
    EditItemComponent,
    DeleteItemComponent,
    EditSiteComponent,
    EditUserComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
