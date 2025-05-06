import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { NavigationService } from '../../navigation.service';
import { CommonModule } from '@angular/common';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-mobile-header',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './mobile-header.component.html',
  styleUrl: './mobile-header.component.scss',
})
export class MobileHeaderComponent {
  constructor(
    private navService: NavigationService,
    public translate: TranslateService
  ) {
    const savedLang = localStorage.getItem('selectedLang') as
      | 'en'
      | 'de'
      | null;
    const langToUse = savedLang || 'en';
    this.translate.setDefaultLang(langToUse);
    this.translate.use(langToUse);
  }

  get activeLang(): 'en' | 'de' {
    return this.translate.currentLang as 'en' | 'de';
  }

  switchLanguage(lang: 'en' | 'de') {
    localStorage.setItem('selectedLang', lang);
    this.translate.use(lang);
  }

  isNavbarOpen = false;
  hoverLogo = false;

  @ViewChild('navbar') navbarRef!: ElementRef;

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  goToSection(section: string) {
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      this.isNavbarOpen = false;
    }
  }

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: MouseEvent) {
    const clickedInsideNavbar = this.navbarRef?.nativeElement.contains(
      event.target
    );
    const clickedNavbarButton = (event.target as HTMLElement).closest(
      '.navbar_button'
    );

    if (!clickedInsideNavbar && !clickedNavbarButton) {
      this.isNavbarOpen = false;
    }
  }
}
