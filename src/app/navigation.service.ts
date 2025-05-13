import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NavigationService {
  private overlayClosedSource = new BehaviorSubject<void>(undefined);
  overlayClosed$ = this.overlayClosedSource.asObservable();

  private pendingScrollSectionId: string | null = null;

  requestScrollToSection(sectionId: string) {
    this.closeOverlayIfOpen();
    this.pendingScrollSectionId = sectionId;
  }

  performPendingScrollIfAny() {
    if (this.pendingScrollSectionId) {
      setTimeout(() => {
        const el = document.getElementById(this.pendingScrollSectionId!);
        el?.scrollIntoView({ behavior: 'smooth' });
        this.pendingScrollSectionId = null;
      }, 50);
    }
  }

  closeOverlayIfOpen() {
    this.overlayClosedSource.next();
  }
}
