import { Component } from '@angular/core';
import { NavigationService } from '../../navigation.service';
import { CommonModule } from '@angular/common';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  activeLang: 'en' | 'de' = 'en';

  constructor(
    private navService: NavigationService,
    private translate: TranslateService
  ) {
    const savedLang = localStorage.getItem('selectedLang') as 'en' | 'de';
    this.activeLang = savedLang || 'en';
    this.translate.setDefaultLang(this.activeLang);
    this.translate.use(this.activeLang);
  }

  switchLanguage(lang: 'en' | 'de') {
    this.activeLang = lang;
    localStorage.setItem('selectedLang', lang);
    this.translate.use(lang);
  }

  goToSection(sectionId: string) {
    this.navService.requestScrollToSection(sectionId);
  }
}
