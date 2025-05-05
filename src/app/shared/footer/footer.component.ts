import { Component } from '@angular/core';
import { LegalNoticeComponent } from '../../legal-notice/legal-notice.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [LegalNoticeComponent, NgIf],
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
