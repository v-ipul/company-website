import { Routes } from '@angular/router';
import { HomeComponent } from './home.component/home.component';
import { IndustriesComponent } from './industries/industries.component';
import { ServicesComponent } from './services/services.component';
import { OurBecomingComponent } from './our-becoming/our-becoming';

export const routes: Routes = [
   { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
  { path: 'industries', component: IndustriesComponent },  
   { path: 'services', component: ServicesComponent },   
   { path:'being-atman' , component:OurBecomingComponent},  
  
];
