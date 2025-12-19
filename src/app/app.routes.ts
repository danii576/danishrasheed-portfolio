import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { SkillsPage } from './pages/skills/skills.page';
import { ContactPage } from './pages/contact/contact.page';
import { HobbyPage } from './pages/hobby/hobby.page';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomePage,
  },
  {
    path: 'skills',
    component: SkillsPage,
  },
   {
    path: 'contact',
    component: ContactPage,
  },
   {
    path: 'hobby',
    component: HobbyPage,
  },
];
