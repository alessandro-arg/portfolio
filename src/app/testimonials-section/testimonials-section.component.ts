import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-testimonials-section',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './testimonials-section.component.html',
  styleUrl: './testimonials-section.component.scss',
})
export class TestimonialsSectionComponent {
  isHovered1 = false;
  isHovered2 = false;
  isHovered3 = false;
}
