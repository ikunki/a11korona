import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewConfirmedComponent } from './new-confirmed.component';

describe('NewConfirmedComponent', () => {
  let component: NewConfirmedComponent;
  let fixture: ComponentFixture<NewConfirmedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewConfirmedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewConfirmedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
