import { Component } from '@angular/core';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FooterComponent } from '../shared/footer/footer.component';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [ContactFormComponent, FooterComponent],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.scss',
})
export class ContactSectionComponent {}
