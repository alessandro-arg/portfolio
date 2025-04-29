import { Component } from '@angular/core';
import { NavigationService } from '../../navigation.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private navService: NavigationService) {}

  activeLang: 'en' | 'de' = 'en';

  switchLanguage(lang: 'en' | 'de') {
    this.activeLang = lang;
  }

  goToSection(sectionId: string) {
    this.navService.requestScrollToSection(sectionId);
  }
}
