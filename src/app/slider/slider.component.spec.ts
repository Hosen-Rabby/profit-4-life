// src/app/slider/slider.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  standalone: true,  // Add this line
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  images = [
    'assets/img/image1.jpg',
    'assets/img/image2.jpg',
    'assets/img/image3.jpg',
    'assets/img/image4.jpg',
    'assets/img/image5.jpg',
    'assets/img/image6.jpg'
  ];

  currentIndex = 0;

  prev(): void {
    this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.images.length - 1;
  }

  next(): void {
    this.currentIndex = (this.currentIndex < this.images.length - 1) ? this.currentIndex + 1 : 0;
  }

  getStyle(index: number): object {
    const offset = index - this.currentIndex;
    return {
      transform: `translateX(${offset * 10}%)`,
      zIndex: this.images.length - Math.abs(offset),
      opacity: offset === 0 ? 1 : 0.5
    };
  }
}
