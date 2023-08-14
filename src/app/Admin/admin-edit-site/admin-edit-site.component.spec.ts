import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditSiteComponent } from './admin-edit-site.component';

describe('AdminEditSiteComponent', () => {
  let component: AdminEditSiteComponent;
  let fixture: ComponentFixture<AdminEditSiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminEditSiteComponent]
    });
    fixture = TestBed.createComponent(AdminEditSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
