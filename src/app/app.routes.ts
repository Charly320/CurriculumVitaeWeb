import { Routes } from '@angular/router';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SkillsComponent } from './components/skills/skills.component';
import { EducationComponent } from './components/education/education.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
	{ path: '', redirectTo: 'about', pathMatch: 'full' },
	{ path: 'about', component: AboutMeComponent },
	{ path: 'experience', component: ExperienceComponent },
	{ path: 'skills', component: SkillsComponent },
	{ path: 'education', component: EducationComponent },
	{ path: 'contact', component: ContactComponent },
	{ path: '**', redirectTo: 'about' }
];
