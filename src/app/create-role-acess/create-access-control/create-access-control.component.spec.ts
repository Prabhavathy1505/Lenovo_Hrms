import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAccessControlComponent } from './create-access-control.component';

describe('CreateAccessControlComponent', () => {
  let component: CreateAccessControlComponent;
  let fixture: ComponentFixture<CreateAccessControlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateAccessControlComponent]
    });
    fixture = TestBed.createComponent(CreateAccessControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
