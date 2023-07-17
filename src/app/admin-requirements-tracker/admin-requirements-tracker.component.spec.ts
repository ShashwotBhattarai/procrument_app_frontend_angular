import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRequirementsTrackerComponent } from './admin-requirements-tracker.component';

describe('AdminRequirementsTrackerComponent', () => {
  let component: AdminRequirementsTrackerComponent;
  let fixture: ComponentFixture<AdminRequirementsTrackerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminRequirementsTrackerComponent]
    });
    fixture = TestBed.createComponent(AdminRequirementsTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
