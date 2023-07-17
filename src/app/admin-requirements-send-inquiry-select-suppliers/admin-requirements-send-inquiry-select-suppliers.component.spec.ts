import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRequirementsSendInquirySelectSuppliersComponent } from './admin-requirements-send-inquiry-select-suppliers.component';

describe('AdminRequirementsSendInquirySelectSuppliersComponent', () => {
  let component: AdminRequirementsSendInquirySelectSuppliersComponent;
  let fixture: ComponentFixture<AdminRequirementsSendInquirySelectSuppliersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminRequirementsSendInquirySelectSuppliersComponent]
    });
    fixture = TestBed.createComponent(AdminRequirementsSendInquirySelectSuppliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
