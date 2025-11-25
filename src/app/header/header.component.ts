import { Component, EventEmitter, Output } from '@angular/core';
import { RouterModule } from '@angular/router'

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() homePressed = new EventEmitter<boolean>();

  onReturnHome() {
    this.homePressed.emit(true)
  }
}
