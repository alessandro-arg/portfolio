import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '../project-overlay/project.model';
import { HeaderComponent } from '../shared/header/header.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-project-overlay',
  standalone: true,
  imports: [HeaderComponent, TranslateModule],
  templateUrl: './project-overlay.component.html',
  styleUrls: ['./project-overlay.component.scss'],
})
export class ProjectOverlayComponent {
  @Input() project: Project | null = null;
  @Input() projectId: string = '';
  @Output() close = new EventEmitter<void>();
  @Output() next = new EventEmitter<void>();

  closeOverlay() {
    this.close.emit();
  }

  nextProject() {
    this.next.emit();
  }
}
