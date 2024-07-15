// src/app/slider/slider.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit {
  images = [
    'assets/img/about/55b25c25408f763680480095219adb07.jpg',
    'assets/img/about/55b25c25408f763680480095219adb07.jpg',
    'assets/img/about/55b25c25408f763680480095219adb07.jpg',
    'assets/img/about/55b25c25408f763680480095219adb07.jpg',
    'assets/img/about/55b25c25408f763680480095219adb07.jpg',
    'assets/img/about/55b25c25408f763680480095219adb07.jpg',
  ];

  currentIndex = 0;

  constructor() {}

  ngOnInit(): void {}

  prev(): void {
    this.currentIndex =
      this.currentIndex > 0 ? this.currentIndex - 1 : this.images.length - 1;
  }

  next(): void {
    this.currentIndex =
      this.currentIndex < this.images.length - 1 ? this.currentIndex + 1 : 0;
  }

  getStyle(index: number): object {
    const offset = index - this.currentIndex;
    return {
      transform: `translateX(${offset * 10}%)`,
      zIndex: this.images.length - Math.abs(offset),
      opacity: offset === 0 ? 1 : 0.5,
    };
  }
}
