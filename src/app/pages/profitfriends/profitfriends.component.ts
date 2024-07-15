import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-profitfriends',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profitfriends.component.html',
  styleUrl: './profitfriends.component.css',
})
export class ProfitfriendsComponent {
  constructor(private titleService: Title) {
    this.setTitle('Profit Friends');
  }
  setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
  images: string[] = [
    '../../../assets/img/about/1.png',
    '../../../assets/img/about/2.png',
    '../../../assets/img/about/3.png',
    '../../../assets/img/about/4.png',
    '../../../assets/img/about/5.png',
    '../../../assets/img/about/6.png',
  ];

  nextSlide() {
    const firstImage = this.images.shift();
    if (firstImage) {
      this.images.push(firstImage);
    }
  }

  prevSlide() {
    const lastImage = this.images.pop();
    if (lastImage) {
      this.images.unshift(lastImage);
    }
  }
}
