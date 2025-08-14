import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-testimonials-section',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './testimonials-section.component.html',
  styleUrl: './testimonials-section.component.scss',
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(
          '1000ms cubic-bezier(.2,.8,.2,1)',
          style({ opacity: 1, transform: 'none' })
        ),
      ]),
    ]),
  ],
  host: { '[@fadeInUp]': '' },
})
export class TestimonialsSectionComponent {
  isHovered1 = false;
  isHovered2 = false;
  isHovered3 = false;
}
