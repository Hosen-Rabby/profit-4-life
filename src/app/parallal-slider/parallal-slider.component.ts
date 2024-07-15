import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parallal-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './parallal-slider.component.html',
  styleUrls: ['./parallal-slider.component.css'],
})
export class ParallalSliderComponent {
  images: string[] = [
    '../../../assets/img/about/1.png',
    '../../../assets/img/about/2.png',
    '../../../assets/img/about/1.png',
    '../../../assets/img/about/2.png',
    '../../../assets/img/about/1.png',
    '../../../assets/img/about/2.png',
  ];

  currentIndex: number = 0;

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  getDisplayedImages() {
    const previousIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
    const nextIndex = (this.currentIndex + 1) % this.images.length;
    return [
      this.images[previousIndex],
      this.images[this.currentIndex],
      this.images[nextIndex],
    ];
  }
}
