import { Component, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TranslateModule],
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    const platformId = inject(PLATFORM_ID);

    if (isPlatformBrowser(platformId)) {
      const savedLang = localStorage.getItem('selectedLang') as
        | 'en'
        | 'de'
        | null;
      const langToUse = savedLang || 'en';
      this.translate.setDefaultLang(langToUse);
      this.translate.use(langToUse);
    } else {
      this.translate.setDefaultLang('en');
    }
  }
}
