import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherMapPage } from './weather-map.page';

describe('WeatherMapPage', () => {
  let component: WeatherMapPage;
  let fixture: ComponentFixture<WeatherMapPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(WeatherMapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
