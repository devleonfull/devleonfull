import { Component } from '@angular/core';
import aboutData from '../../assets/about-me.json';

@Component({
  selector: 'app-about-me-section',
  imports: [],
  templateUrl: './about-me-section.component.html',
  styleUrl: './about-me-section.component.css'
})
export class AboutMeSectionComponent {
 public data = aboutData;
}
