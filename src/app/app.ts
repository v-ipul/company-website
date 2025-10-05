import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CookieConsentComponent } from './shared/cookie-consent/cookie-consent';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CookieConsentComponent], // <-- add this
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  protected readonly title = signal('company-website');
}
