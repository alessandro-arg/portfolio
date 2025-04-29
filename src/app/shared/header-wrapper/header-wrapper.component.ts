import {
  Component,
  HostListener,
  OnInit,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { MobileHeaderComponent } from '../mobile-header/mobile-header.component';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-header-wrapper',
  standalone: true,
  imports: [HeaderComponent, MobileHeaderComponent, CommonModule],
  template: `
    <ng-container *ngIf="isBrowser">
      <app-header *ngIf="!isMobile"></app-header>
      <app-mobile-header *ngIf="isMobile"></app-mobile-header>
    </ng-container>
  `,
})
export class HeaderWrapperComponent {
  isMobile = false;
  isBrowser = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);

    if (this.isBrowser) {
      this.checkScreenSize();
      window.addEventListener('resize', () => this.checkScreenSize());
    }
  }

  private checkScreenSize() {
    this.isMobile = window.innerWidth <= 1000;
  }
}
