import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

const CONSENT_KEY = 'cookieConsentAccepted';

@Component({
  selector: 'app-cookie-consent',
   standalone: true,
  imports: [CommonModule, RouterModule],   // <-- add these
templateUrl: './cookie-consent.html',
  styleUrls: ['./cookie-consent.css'],
})
export class CookieConsentComponent {
  visible = !localStorage.getItem(CONSENT_KEY);

  accept(): void {
    localStorage.setItem(CONSENT_KEY, 'true');
    this.visible = false;
  }
}
