import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { Error404Component } from './error-404/error-404.component';

export const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'legal-notice', component: LegalNoticeComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'page-not-found', component: Error404Component },
  { path: '**', redirectTo: '/page-not-found' },
];
