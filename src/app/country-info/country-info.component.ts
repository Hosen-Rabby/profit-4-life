import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-country-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './country-info.component.html',
  styleUrls: ['./country-info.component.css']
})
export class CountryInfoComponent {
  @Input() imgSrc: string = '';
  @Input() imgAlt: string = '';
  @Input() countryName: string = '';
  @Input() peopleCount: string = '';
}
