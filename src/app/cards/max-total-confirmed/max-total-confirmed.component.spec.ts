import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxTotalConfirmedComponent } from './max-total-confirmed.component';

describe('MaxTotalConfirmedComponent', () => {
  let component: MaxTotalConfirmedComponent;
  let fixture: ComponentFixture<MaxTotalConfirmedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaxTotalConfirmedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxTotalConfirmedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
