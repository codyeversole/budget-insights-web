import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './basic-components/page-not-found/page-not-found.component';
import { ErrorPageComponent } from './basic-components/error-page/error-page.component';
import { AccessDeniedComponent } from './basic-components/access-denied/access-denied.component';

export const routes: Routes = [
    { path: '', loadChildren: () => import('./landing-page/landng-page.routes') },
    { path: 'portal', loadChildren: () => import('./budget-dashboard/budget-dashboard.routes') },
    { path: 'access-denied', component: AccessDeniedComponent },
    { path: 'error', component: ErrorPageComponent },
    { path: '**', component: PageNotFoundComponent },
];
