import { Component } from '@angular/core';
import { LegalNoticeComponent } from '../../legal-notice/legal-notice.component';
import { CommonModule, NgIf } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [LegalNoticeComponent, NgIf, CommonModule, TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  showLegalNotice = false;

  toggleLegalNotice() {
    this.showLegalNotice = !this.showLegalNotice;
    document.body.style.overflow = this.showLegalNotice ? 'hidden' : 'auto';
  }

  hideLegalNotice() {
    this.showLegalNotice = false;
    document.body.style.overflow = 'auto';
  }
}
