import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterLink],
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
