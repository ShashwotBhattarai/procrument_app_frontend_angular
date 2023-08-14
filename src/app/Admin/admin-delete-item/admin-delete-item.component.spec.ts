import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDeleteItemComponent } from './admin-delete-item.component';

describe('AdminDeleteItemComponent', () => {
  let component: AdminDeleteItemComponent;
  let fixture: ComponentFixture<AdminDeleteItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminDeleteItemComponent]
    });
    fixture = TestBed.createComponent(AdminDeleteItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
