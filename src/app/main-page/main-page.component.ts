import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../hero/hero.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { SkillsSectionComponent } from '../skills-section/skills-section.component';
import { ProjectsSectionComponent } from '../projects-section/projects-section.component';
import { TestimonialsSectionComponent } from '../testimonials-section/testimonials-section.component';
import { ContactSectionComponent } from '../contact-section/contact-section.component';
import { HeaderWrapperComponent } from '../shared/header-wrapper/header-wrapper.component';
import { TranslateModule } from '@ngx-translate/core';
import { CursorComponent } from '../shared/cursor/cursor.component'; // Future cursor implementation
import { NavigationService } from '../navigation.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    AboutMeComponent,
    SkillsSectionComponent,
    ProjectsSectionComponent,
    TestimonialsSectionComponent,
    ContactSectionComponent,
    HeaderWrapperComponent,
    TranslateModule,
    RouterOutlet,
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent implements OnInit {
  constructor(private navService: NavigationService) {}

  ngOnInit() {
    this.navService.performPendingScrollIfAny();
  }
}
