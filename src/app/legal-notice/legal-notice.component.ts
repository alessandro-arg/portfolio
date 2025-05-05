import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss',
})
export class LegalNoticeComponent {
  @Output() clickOutside = new EventEmitter<void>();

  close() {
    this.clickOutside.emit();
  }
}
