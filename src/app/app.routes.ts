import { Routes } from '@angular/router';
import { IndustriesComponent } from './industries/industries.component';
import { ServicesComponent } from './services/services.component';

export const routes: Routes = [
  { path: 'industries', component: IndustriesComponent },  
   { path: 'services', component: ServicesComponent },     
  
];
