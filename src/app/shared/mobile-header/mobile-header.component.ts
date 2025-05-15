import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { NavigationService } from '../../navigation.service';
import { CommonModule } from '@angular/common';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { Router } from '@angular/router';

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
    private router: Router,
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

  onLogoClick() {
    const currentUrl = this.router.url;
    if (currentUrl === '/legal-notice' || currentUrl === '/privacy-policy') {
      this.router.navigateByUrl('/');
    } else {
      this.goToSection('header');
    }
  }

  isNavbarOpen = false;
  hoverLogo = false;

  @ViewChild('navbar') navbarRef!: ElementRef;

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  goToSection(sectionId: string) {
    this.isNavbarOpen = false;

    if (this.router.url === '/') {
      this.navService.requestScrollToSection(sectionId);
      this.navService.performPendingScrollIfAny();
    } else {
      this.navService.requestScrollToSection(sectionId);
      this.router.navigate(['/']);
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
