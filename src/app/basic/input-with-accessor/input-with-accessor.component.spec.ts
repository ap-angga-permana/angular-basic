import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputWithAccessorComponent } from './input-with-accessor.component';

describe('InputWithAccessorComponent', () => {
  let component: InputWithAccessorComponent;
  let fixture: ComponentFixture<InputWithAccessorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputWithAccessorComponent]
    });
    fixture = TestBed.createComponent(InputWithAccessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
