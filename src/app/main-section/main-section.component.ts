import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import {RouterOutlet} from '@angular/router';

import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-main-section',
  imports: [MenuComponent, RouterOutlet, CommonModule],
  templateUrl: './main-section.component.html',
  styleUrl: './main-section.component.css',
})
export class MainSectionComponent {
isContentVisible = false;

  // This function runs when the child component emits the event
  showContent(): void {

    this.isContentVisible = true;
  }
}


