import { Component, OnInit, signal } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// import { trigger, state, style, transition, animate } from '@angular/animations';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from "./header/header.component"; // Import MenuComponent
// import { filter, Subject, take, takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, FooterComponent, MenuComponent, HeaderComponent], // Add MenuComponent
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  isMenuClicked = signal(false); // New signal for menu state


  constructor() { }

  ngOnInit(): void {
  }

  scrollToCategory(categoryId: string): void {
    const element = document.getElementById(categoryId);
    element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  // This function is called by the menu click
  onMenuSelect(category_id: string): void {
    this.isMenuClicked.set(true);
    if (window.innerWidth < 768) {
      setTimeout(() => {
        this.scrollToCategory(category_id);
      }, 500); // Wait for next tick
    }

  }



}