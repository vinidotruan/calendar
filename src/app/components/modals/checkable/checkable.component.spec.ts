import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckableComponent } from './checkable.component';

describe('CheckableComponent', () => {
  let component: CheckableComponent;
  let fixture: ComponentFixture<CheckableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckableComponent]
    });
    fixture = TestBed.createComponent(CheckableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
