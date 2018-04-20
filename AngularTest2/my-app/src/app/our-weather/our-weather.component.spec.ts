import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurWeatherComponent } from './our-weather.component';

describe('OurWeatherComponent', () => {
  let component: OurWeatherComponent;
  let fixture: ComponentFixture<OurWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurWeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
