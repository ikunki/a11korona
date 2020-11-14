import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRecoveredComponent } from './new-recovered.component';

describe('NewRecoveredComponent', () => {
  let component: NewRecoveredComponent;
  let fixture: ComponentFixture<NewRecoveredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewRecoveredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRecoveredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
