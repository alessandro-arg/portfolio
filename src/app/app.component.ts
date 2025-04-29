import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsSectionComponent } from './skills-section/skills-section.component';
import { ProjectsSectionComponent } from './projects-section/projects-section.component';
import { TestimonialsSectionComponent } from './testimonials-section/testimonials-section.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { HeaderWrapperComponent } from './shared/header-wrapper/header-wrapper.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeroComponent,
    AboutMeComponent,
    SkillsSectionComponent,
    ProjectsSectionComponent,
    TestimonialsSectionComponent,
    ContactSectionComponent,
    HeaderWrapperComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'portfolio';
}
