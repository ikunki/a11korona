import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BarChartTotalComponent } from './bar-chart-total.component';

describe('BarChartTotalComponent', () => {
  let component: BarChartTotalComponent;
  let fixture: ComponentFixture<BarChartTotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarChartTotalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarChartTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
