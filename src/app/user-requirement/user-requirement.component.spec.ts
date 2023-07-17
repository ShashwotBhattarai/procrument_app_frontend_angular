import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRequirementComponent } from './user-requirement.component';

describe('UserRequirementComponent', () => {
  let component: UserRequirementComponent;
  let fixture: ComponentFixture<UserRequirementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserRequirementComponent]
    });
    fixture = TestBed.createComponent(UserRequirementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
