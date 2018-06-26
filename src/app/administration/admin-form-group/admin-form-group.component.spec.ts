import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFormGroupComponent } from './admin-form-group.component';

describe('AdminFormGroupComponent', () => {
  let component: AdminFormGroupComponent;
  let fixture: ComponentFixture<AdminFormGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminFormGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFormGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
