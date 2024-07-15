import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryInfoComponent } from '../../country-info/country-info.component';

import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CountryInfoComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private titleService: Title) {
    this.setTitle('Home');
  }
  setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
  countries = [
    {
      imgSrc: 'assets/img/home/united states.png',
      imgAlt: 'USA',
      name: 'United States',
      peopleCount: '40K',
    },
    {
      imgSrc: 'assets/img/home/ecuador.png',
      imgAlt: 'ecuador',
      name: 'ecuador',
      peopleCount: '1.9K',
    },
    {
      imgSrc: 'assets/img/home/italy.png',
      imgAlt: 'italy',
      name: 'Italy',
      peopleCount: '230',
    },
    {
      imgSrc: 'assets/img/home/bolivia.png',
      imgAlt: 'bolivia',
      name: 'bolivia',
      peopleCount: '54',
    },
    {
      imgSrc: 'assets/img/home/ireland.png',
      imgAlt: 'ireland',
      name: 'ireland',
      peopleCount: '15',
    },
    {
      imgSrc: 'assets/img/home/chile.png',
      imgAlt: 'chile.png',
      name: 'chile',
      peopleCount: '9.4k',
    },
    {
      imgSrc: 'assets/img/home/peru.png',
      imgAlt: 'peru',
      name: 'peru',
      peopleCount: '1K',
    },
    {
      imgSrc: 'assets/img/home/holandia.png',
      imgAlt: 'holandia',
      name: 'holandia',
      peopleCount: '205',
    },
    {
      imgSrc: 'assets/img/home/ireland.png',
      imgAlt: 'ireland',
      name: 'ireland',
      peopleCount: '15',
    },
    {
      imgSrc: 'assets/img/home/chile.png',
      imgAlt: 'chile.png',
      name: 'chile',
      peopleCount: '9.4k',
    },
    {
      imgSrc: 'assets/img/home/peru.png',
      imgAlt: 'peru',
      name: 'peru',
      peopleCount: '1K',
    },
    {
      imgSrc: 'assets/img/home/holandia.png',
      imgAlt: 'holandia',
      name: 'holandia',
      peopleCount: '205',
    },
    {
      imgSrc: 'assets/img/home/ireland.png',
      imgAlt: 'ireland',
      name: 'ireland',
      peopleCount: '15',
    },
    {
      imgSrc: 'assets/img/home/chile.png',
      imgAlt: 'chile.png',
      name: 'chile',
      peopleCount: '9.4k',
    },
    {
      imgSrc: 'assets/img/home/peru.png',
      imgAlt: 'peru',
      name: 'peru',
      peopleCount: '1K',
    },
    {
      imgSrc: 'assets/img/home/holandia.png',
      imgAlt: 'holandia',
      name: 'holandia',
      peopleCount: '205',
    },
    {
      imgSrc: 'assets/img/home/ireland.png',
      imgAlt: 'ireland',
      name: 'ireland',
      peopleCount: '15',
    },
    {
      imgSrc: 'assets/img/home/chile.png',
      imgAlt: 'chile.png',
      name: 'chile',
      peopleCount: '9.4k',
    },
    {
      imgSrc: 'assets/img/home/peru.png',
      imgAlt: 'peru',
      name: 'peru',
      peopleCount: '1K',
    },
    {
      imgSrc: 'assets/img/home/holandia.png',
      imgAlt: 'holandia',
      name: 'holandia',
      peopleCount: '205',
    },
    {
      imgSrc: 'assets/img/home/ireland.png',
      imgAlt: 'ireland',
      name: 'ireland',
      peopleCount: '15',
    },
    {
      imgSrc: 'assets/img/home/chile.png',
      imgAlt: 'chile.png',
      name: 'chile',
      peopleCount: '9.4k',
    },
    {
      imgSrc: 'assets/img/home/peru.png',
      imgAlt: 'peru',
      name: 'peru',
      peopleCount: '1K',
    },
    {
      imgSrc: 'assets/img/home/holandia.png',
      imgAlt: 'holandia',
      name: 'holandia',
      peopleCount: '205',
    },
  ];
}
