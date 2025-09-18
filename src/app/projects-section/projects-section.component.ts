import { Component, signal, AfterViewInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

import projectsData from '../../assets/projects.json';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.css']
})
export class ProjectsSectionComponent implements AfterViewInit {
  public categories = projectsData;
  public activeCategory = signal(projectsData[0]?.categoryId || '');
  private observer!: IntersectionObserver;

  @ViewChildren('categorySection') private sectionElements!: QueryList<ElementRef>;

  ngAfterViewInit(): void {
    this.setupIntersectionObserver();
  }

  private setupIntersectionObserver(): void {
    // The options mean the observer will trigger when a section's top edge
    // crosses the horizontal center of the viewport.
    const options = {
      root: null, // observes intersections relative to the viewport
      rootMargin: '-50% 0px -50% 0px', // A horizontal line in the middle of the screen
      threshold: 0
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // If the entry is intersecting (i.e., its top has crossed the middle line)
        if (entry.isIntersecting) {
          // Update the active category signal to the ID of that section
          this.activeCategory.set(entry.target.id);
        }
      });
    }, options);

    // Tell the observer to watch each of the section elements
    this.sectionElements.forEach((section: ElementRef) => {
      this.observer.observe(section.nativeElement);
    });
  }

  scrollToCategory(categoryId: string): void {
    const element = document.getElementById(categoryId);
    element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    this.activeCategory.set(categoryId)
  }
}