import { Component, EventEmitter, Output } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [ RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  @Output() menuItemSelected = new EventEmitter<void>();

  // This function will be called when any menu link is clicked
  onItemSelect(): void {
    this.menuItemSelected.emit();
  }
}
