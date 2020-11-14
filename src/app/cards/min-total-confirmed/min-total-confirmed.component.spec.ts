import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinTotalConfirmedComponent } from './min-total-confirmed.component';

describe('MinTotalConfirmedComponent', () => {
  let component: MinTotalConfirmedComponent;
  let fixture: ComponentFixture<MinTotalConfirmedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinTotalConfirmedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinTotalConfirmedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
