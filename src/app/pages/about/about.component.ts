import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParallalSliderComponent } from '../../parallal-slider/parallal-slider.component';
import { Title } from '@angular/platform-browser';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  standalone: true,
  imports: [CommonModule, ParallalSliderComponent],
})
export class AboutComponent {
  constructor(private sanitizer: DomSanitizer, private titleService: Title) {
    this.setTitle('About Me');
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

  // video

  videos = [
    {
      url: 'https://www.youtube.com/embed/JG_JpEdo-yk?si=7ebXU_l2-cuxCUGU',
      thumbnail:
        '../../../assets/img/about/bf5c7701b26bd52ffc92f25f904385f2.png',
    },
    {
      url: 'https://www.youtube.com/embed/JG_JpEdo-yk?si=7ebXU_l2-cuxCUGU',
      thumbnail:
        '../../../assets/img/about/62c50f96f0cbb4e0f72e212ba10afd2d.png',
    },
    {
      url: 'https://www.youtube.com/embed/JG_JpEdo-yk?si=7ebXU_l2-cuxCUGU',
      thumbnail:
        '../../../assets/img/about/a0bec3df570a2a750ac173412fc37f55.png',
    },
    {
      url: 'https://www.youtube.com/embed/JG_JpEdo-yk?si=7ebXU_l2-cuxCUGU',
      thumbnail:
        '../../../assets/img/about/117ef892725722e292e7bae5a824ad95.png',
    },
    {
      url: 'https://www.youtube.com/embed/JG_JpEdo-yk?si=7ebXU_l2-cuxCUGU',
      thumbnail:
        '../../../assets/img/about/9306370b281f4a1a529e9cc226be7ae3.png',
    },
  ];

  currentVideoIndex = 0;

  get currentVideo(): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      this.videos[this.currentVideoIndex].url
    );
  }

  selectVideo(index: number) {
    this.currentVideoIndex = index;
  }
}
