import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxTotalDeathsComponent } from './max-total-deaths.component';

describe('MaxTotalDeathsComponent', () => {
  let component: MaxTotalDeathsComponent;
  let fixture: ComponentFixture<MaxTotalDeathsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaxTotalDeathsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxTotalDeathsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
