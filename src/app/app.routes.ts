import { provideRouter, Routes, withInMemoryScrolling  } from '@angular/router';
import { HomeComponent } from './home.component/home.component';
import { IndustriesComponent } from './industries/industries.component';
import { Banking } from './banking/banking';
import { Healthcare } from './healthcare/healthcare';
import { Hitech } from './hitech/hitech';
import { Insurance } from './insurance/insurance';
import { ServicesComponent } from './services/services.component';
import { OurBecomingComponent } from './our-becoming/our-becoming';
import { PrivacyPolicy } from './pages/privacy-policy/privacy-policy';
import { Termsandcondition } from './pages/termsandcondition/termsandcondition';
import { CookieConsentComponent } from './shared/cookie-consent/cookie-consent';
import { Ai } from './ai/ai';
import { News } from './news/news';
import { Comingsoon } from './comingsoon/comingsoon';
import { MyContactForm } from './my-contact-form/my-contact-form';
import { Header } from './header/header';




export const routes: Routes = [
   { path: '', redirectTo: '/home', pathMatch: 'full' },
   { path: 'home', component: HomeComponent },
   { path: 'industries', component: IndustriesComponent },  
    { path: 'banking', component: Banking },  
     { path: 'healthcare', component: Healthcare }, 
       { path: 'hitech', component: Hitech }, 
         { path: 'header', component: Header }, 
       { path: 'insurance', component: Insurance }, 
   { path: 'services', component: ServicesComponent },
   { path: 'beingatman', component: OurBecomingComponent },  
   { path: 'privacy', component: PrivacyPolicy },
    { path: 'termsandcondition', component: Termsandcondition },
   { path: 'cookie', component: CookieConsentComponent },
   { path: 'ai', component: Ai },
   { path: 'news', component: News },
   { path: 'comingsoon', component: Comingsoon },
   { path: 'contactus', component: MyContactForm }  // Updated path for Contact Us page
];

export const router = provideRouter(
  routes,
  withInMemoryScrolling({
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled'
  })
);
