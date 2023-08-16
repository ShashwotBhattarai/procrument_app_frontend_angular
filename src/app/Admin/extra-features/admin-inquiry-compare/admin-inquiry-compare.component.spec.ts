import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInquiryCompareComponent } from './admin-inquiry-compare.component';

describe('AdminInquiryCompareComponent', () => {
  let component: AdminInquiryCompareComponent;
  let fixture: ComponentFixture<AdminInquiryCompareComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminInquiryCompareComponent]
    });
    fixture = TestBed.createComponent(AdminInquiryCompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
