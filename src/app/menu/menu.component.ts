import { Component, EventEmitter, Output } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  @Output() menuItemSelected = new EventEmitter<string>();

  // This function will be called when any menu link is clicked
  onItemSelect(section_id: string) {
    this.menuItemSelected.emit(section_id);

  }
}