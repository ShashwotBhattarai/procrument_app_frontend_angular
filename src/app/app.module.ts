import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminItemsComponent } from './admin-items/admin-items.component';
import { AdminSupplierComponent } from './admin-supplier/admin-supplier.component';
import { AdminSiteComponent } from './admin-site/admin-site.component';
import { AdminCredentialsComponent } from './admin-credentials/admin-credentials.component';
import { UserRequirementComponent } from './user-requirement/user-requirement.component';
import { AdminInquiryComponent } from './admin-inquiry/admin-inquiry.component';
import { AdminRequirementsTrackerComponent } from './admin-requirements-tracker/admin-requirements-tracker.component';
import { AdminRequirementsSendInquirySelectSuppliersComponent } from './admin-requirements-send-inquiry-select-suppliers/admin-requirements-send-inquiry-select-suppliers.component';
import { AdminInquiryCompareComponent } from './admin-inquiry-compare/admin-inquiry-compare.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminDashboardComponent,
    AdminItemsComponent,
    AdminSupplierComponent,
    AdminSiteComponent,
    AdminCredentialsComponent,
    UserRequirementComponent,
    AdminInquiryComponent,
    AdminRequirementsTrackerComponent,
    AdminRequirementsSendInquirySelectSuppliersComponent,
    AdminInquiryCompareComponent,
    UserDashboardComponent,
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
