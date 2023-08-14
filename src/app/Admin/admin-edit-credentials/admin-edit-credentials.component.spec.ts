import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditCredentialsComponent } from './admin-edit-credentials.component';

describe('AdminEditCredentialsComponent', () => {
  let component: AdminEditCredentialsComponent;
  let fixture: ComponentFixture<AdminEditCredentialsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminEditCredentialsComponent]
    });
    fixture = TestBed.createComponent(AdminEditCredentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
