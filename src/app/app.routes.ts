import { Routes } from '@angular/router';
import { MainSectionComponent } from './main-section/main-section.component';
import { ProjectsSectionComponent } from './projects-section/projects-section.component';
import { AboutMeSectionComponent } from './about-me-section/about-me-section.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';


export const routes: Routes = [
  // This is now the main route
  {
    path: '',
    component: MainSectionComponent,
    children: [
      { path: 'about', component: AboutMeSectionComponent },
      { path: 'projects', component: ProjectsSectionComponent },
      { path: 'contact', component: ContactSectionComponent },
      
      // Default child route to redirect to 'about'
      { path: '', redirectTo: 'about', pathMatch: 'full' }
    ]
  },
  
  // Optional: Handle any other top-level routes or a 404 page
  // { path: '**', component: NotFoundComponent }
];