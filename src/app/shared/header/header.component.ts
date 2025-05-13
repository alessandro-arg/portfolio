import { Component } from '@angular/core';
import { NavigationService } from '../../navigation.service';
import { CommonModule } from '@angular/common';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(
    private navService: NavigationService,
    private router: Router,
    public translate: TranslateService
  ) {}

  get activeLang(): 'en' | 'de' {
    return this.translate.currentLang as 'en' | 'de';
  }

  switchLanguage(lang: 'en' | 'de') {
    localStorage.setItem('selectedLang', lang);
    this.translate.use(lang);
  }

  goToSection(sectionId: string) {
    if (this.router.url === '/') {
      this.navService.requestScrollToSection(sectionId);
      this.navService.performPendingScrollIfAny();
    } else {
      this.navService.requestScrollToSection(sectionId);
      this.router.navigate(['/']);
    }
  }
}
