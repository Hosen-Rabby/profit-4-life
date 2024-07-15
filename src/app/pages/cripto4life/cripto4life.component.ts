import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cripto4life',
  standalone: true,
  imports: [],
  templateUrl: './cripto4life.component.html',
  styleUrl: './cripto4life.component.css',
})
export class Cripto4lifeComponent {
  constructor(private titleService: Title) {
    this.setTitle('Crypto 4 Life');
  }
  setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
