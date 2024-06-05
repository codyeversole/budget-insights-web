import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';

export const routes: Routes = [
    { path: '', loadChildren: () => import('./public-pages/public-pages.routes') },
    { path: 'portal', loadChildren: () => import('./user-portal/user-portal.routes') },
    { path: 'access-denied', component: AccessDeniedComponent },
    { path: 'error', component: ErrorPageComponent },
    { path: '**', component: PageNotFoundComponent },
];
