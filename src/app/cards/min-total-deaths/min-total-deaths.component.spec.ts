import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinTotalDeathsComponent } from './min-total-deaths.component';

describe('MinTotalDeathsComponent', () => {
  let component: MinTotalDeathsComponent;
  let fixture: ComponentFixture<MinTotalDeathsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinTotalDeathsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinTotalDeathsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
