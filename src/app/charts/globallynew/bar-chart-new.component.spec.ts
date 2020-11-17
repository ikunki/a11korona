import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChartNewComponent } from './bar-chart-new.component';

describe('BarChartComponent', () => {
  let component: BarChartNewComponent;
  let fixture: ComponentFixture<BarChartNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarChartNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarChartNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
