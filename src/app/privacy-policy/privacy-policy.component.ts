import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderWrapperComponent } from '../shared/header-wrapper/header-wrapper.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    HeaderWrapperComponent,
    FooterComponent,
  ],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss',
})
export class PrivacyPolicyComponent {
  constructor(private meta: Meta, private title: Title) {
    this.title.setTitle('Privacy Policy - Alessandro Argenziano');
    this.meta.updateTag({
      name: 'description',
      content:
        'Read the privacy policy for Alessandro Argenziano’s portfolio: how personal data is collected, used, and protected.',
    });
  }

  goBack() {
    history.back();
  }
}
