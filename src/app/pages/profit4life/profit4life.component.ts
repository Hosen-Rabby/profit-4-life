import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-profit4life',
  standalone: true,
  imports: [],
  templateUrl: './profit4life.component.html',
  styleUrl: './profit4life.component.css',
})
export class Profit4lifeComponent {
  constructor(private titleService: Title) {
    this.setTitle('Profit 4 Life');
  }
  setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
