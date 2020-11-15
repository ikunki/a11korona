import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsAllCountriesComponent } from './stats-all-countries.component';

describe('StatsAllCountriesComponent', () => {
  let component: StatsAllCountriesComponent;
  let fixture: ComponentFixture<StatsAllCountriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatsAllCountriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsAllCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
