import { provideRouter, Routes, withInMemoryScrolling } from '@angular/router';
import { HomeComponent } from './home.component/home.component';
import { IndustriesComponent } from './industries/industries.component';
import { ServicesComponent } from './services/services.component';
import { OurBecomingComponent } from './our-becoming/our-becoming';
import { PrivacyPolicy } from './pages/privacy-policy/privacy-policy';
import { Termsandcondition } from './pages/termsandcondition/termsandcondition';
import { CookieConsentComponent } from './shared/cookie-consent/cookie-consent';
import { Ai } from './ai/ai';
import { News } from './news/news';
import { Comingsoon } from './comingsoon/comingsoon';
import { MyContactForm } from './my-contact-form/my-contact-form';




export const routes: Routes = [
   { path: '', redirectTo: '/home', pathMatch: 'full' },
   { path: 'home', component: HomeComponent },
   { path: 'industries', component: IndustriesComponent },  
   { path: 'services', component: ServicesComponent },
   { path: 'being-atman', component: OurBecomingComponent },  
   { path: 'privacy', component: PrivacyPolicy },
    { path: 'termsandcondition', component: Termsandcondition },
   { path: 'cookie', component: CookieConsentComponent },
   { path: 'ai', component: Ai },
   { path: 'news', component: News },
   { path: 'comingsoon', component: Comingsoon },
   { path: 'contact-us', component: MyContactForm }  // Updated path for Contact Us page
];

provideRouter(
  routes,
  withInMemoryScrolling({
    anchorScrolling: 'enabled',  // Enable scrolling to fragments
    scrollPositionRestoration: 'enabled', // Enable restoring scroll position
  })
);