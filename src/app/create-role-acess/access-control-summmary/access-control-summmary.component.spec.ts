import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessControlSummmaryComponent } from './access-control-summmary.component';

describe('AccessControlSummmaryComponent', () => {
  let component: AccessControlSummmaryComponent;
  let fixture: ComponentFixture<AccessControlSummmaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccessControlSummmaryComponent]
    });
    fixture = TestBed.createComponent(AccessControlSummmaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
