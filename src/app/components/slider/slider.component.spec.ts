import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent {
  images: string[] = [
    '../../../assets/img/profitfriends/sl1.png',
    '../../../assets/img/profitfriends/sl2.png',
    'assets/img/home/image2.jpg',
    'assets/img/home/image3.jpg',
    'assets/img/home/image4.jpg',
    'assets/img/home/image5.jpg',
    'assets/img/home/image6.jpg',
  ];
  currentIndex = 0;

  getStyle(index: number) {
    if (index < this.currentIndex) {
      return { transform: `translateX(-100%) scale(0.8)` };
    } else if (index === this.currentIndex) {
      return { transform: `translateX(0) scale(1)`, zIndex: 6 };
    } else {
      return {
        transform: `translateX(${100 * (index - this.currentIndex)}%) scale(${
          1 - 0.2 * (index - this.currentIndex)
        })`,
        zIndex: 6 - (index - this.currentIndex),
      };
    }
  }

  prev() {
    this.currentIndex =
      this.currentIndex > 0 ? this.currentIndex - 1 : this.images.length - 1;
  }

  next() {
    this.currentIndex =
      this.currentIndex < this.images.length - 1 ? this.currentIndex + 1 : 0;
  }
}
