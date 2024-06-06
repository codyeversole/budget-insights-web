import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LandingPageComponent } from './landing-page.component';

export default [
    {path: '', component: LandingPageComponent, children: [
        { path: '', component: HomeComponent }
    ]}
  ] satisfies Route[];
