import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NavigationService {
  private overlayClosedSource = new BehaviorSubject<void>(undefined);
  overlayClosed$ = this.overlayClosedSource.asObservable();

  requestScrollToSection(sectionId: string) {
    this.closeOverlayIfOpen();
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      el?.scrollIntoView({ behavior: 'smooth' });
    }, 10);
  }

  closeOverlayIfOpen() {
    this.overlayClosedSource.next();
  }
}
