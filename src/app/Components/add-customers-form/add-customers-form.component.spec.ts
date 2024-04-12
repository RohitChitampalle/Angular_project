import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCustomersFormComponent } from './add-customers-form.component';

describe('AddCustomersFormComponent', () => {
  let component: AddCustomersFormComponent;
  let fixture: ComponentFixture<AddCustomersFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddCustomersFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddCustomersFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
