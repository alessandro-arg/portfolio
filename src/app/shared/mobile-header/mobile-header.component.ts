import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { NavigationService } from '../../navigation.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mobile-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mobile-header.component.html',
  styleUrl: './mobile-header.component.scss',
})
export class MobileHeaderComponent {
  constructor(private navService: NavigationService) {}

  isNavbarOpen = false;
  hoverLogo = false;
  activeLang: 'en' | 'de' = 'en';

  @ViewChild('navbar') navbarRef!: ElementRef;

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  switchLanguage(lang: 'en' | 'de') {
    this.activeLang = lang;
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
