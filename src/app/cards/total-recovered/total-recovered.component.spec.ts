import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalRecoveredComponent } from './total-recovered.component';

describe('TotalRecoveredComponent', () => {
  let component: TotalRecoveredComponent;
  let fixture: ComponentFixture<TotalRecoveredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalRecoveredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalRecoveredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
