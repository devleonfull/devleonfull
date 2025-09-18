import { Component } from '@angular/core';
import contactData from '../../assets/contact.json'

@Component({
  selector: 'app-contact-section',
  imports: [],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.css'
})
export class ContactSectionComponent {

  public contactMethods = contactData;

}
