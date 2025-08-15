import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';
import { ContactUsPageComponent } from './pages/contact-us-page/contact-us-page.component';
import { FindTutorPageComponent } from './pages/find-tutor-page/find-tutor-page.component';

export const routes: Routes = [
    {
        path: '',
        component: HomePageComponent
    },
    {
        path: 'about',
        component: AboutUsPageComponent
    },
    {
        path: 'contact',
        component: ContactUsPageComponent
    },
    {
        path: 'tutors',
        component: FindTutorPageComponent
    }
];
