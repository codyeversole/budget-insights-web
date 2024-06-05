import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PublicPagesComponent } from './public-pages.component';

export default [
    {path: '', component: PublicPagesComponent, children: [
        { path: '', component: HomeComponent }
    ]}
  ] satisfies Route[];
