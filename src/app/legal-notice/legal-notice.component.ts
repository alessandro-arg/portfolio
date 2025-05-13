import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FooterComponent } from '../shared/footer/footer.component';
import { HeaderWrapperComponent } from '../shared/header-wrapper/header-wrapper.component';

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
  goBack() {
    history.back();
  }
}
