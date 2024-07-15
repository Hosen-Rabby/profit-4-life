import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { SliderComponent } from './components/slider/slider.component';
import { CommonModule } from '@angular/common';

import { ParallalSliderComponent } from './parallal-slider/parallal-slider.component';

@Component({
  standalone: true,
  imports: [
    NavbarComponent,
    RouterModule,
    CommonModule,
    SliderComponent,
    ParallalSliderComponent,
    FooterComponent,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // imports: [SliderComponent]
})
export class AppComponent {
  title = 'Static Site';
}
