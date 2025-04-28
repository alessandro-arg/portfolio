import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../project-overlay/project.model';
import { HeaderComponent } from '../shared/header/header.component';

@Component({
  selector: 'app-project-overlay',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './project-overlay.component.html',
  styleUrls: ['./project-overlay.component.scss'],
})
export class ProjectOverlayComponent {
  @Input() project: Project | null = null;
  @Output() close = new EventEmitter<void>();

  closeOverlay() {
    this.close.emit();
  }
}
