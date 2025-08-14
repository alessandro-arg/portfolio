import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FooterComponent } from '../shared/footer/footer.component';
import { HeaderWrapperComponent } from '../shared/header-wrapper/header-wrapper.component';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    FooterComponent,
    HeaderWrapperComponent,
  ],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss',
})
export class LegalNoticeComponent {
  constructor(private meta: Meta, private title: Title) {
    this.title.setTitle('Legal Notice - Alessandro Argenziano');

    this.meta.updateTag({
      name: 'description',
      content:
        'Read the legal notice & imprint for Alessandro Argenziano’s portfolio—covering data protection, imprint, and contact info.',
    });
  }

  goBack() {
    history.back();
  }
}
