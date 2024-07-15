import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParallalSliderComponent } from './parallal-slider.component';

describe('ParallalSliderComponent', () => {
  let component: ParallalSliderComponent;
  let fixture: ComponentFixture<ParallalSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParallalSliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParallalSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
