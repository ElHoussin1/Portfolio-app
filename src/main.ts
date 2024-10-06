import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/components/home/home.component';
import { AboutComponent } from './app/components/about/about.component';
import { ProjectsComponent } from './app/components/projects/projects.component';
import { SkillsComponent } from './app/components/skills/skills.component';
import { ContactComponent } from './app/components/contact/contact.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'skills', component: SkillsComponent },
      { path: 'contact', component: ContactComponent }
    ]),
    provideAnimations()
  ],
}).catch(err => console.error(err));

// Initialize AOS when the app starts
AOS.init({
  duration: 1000,
  easing: 'ease-in-out',
  once: false,
  mirror: true,
  offset: 120,
});