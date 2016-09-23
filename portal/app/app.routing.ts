import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'about', component: AboutComponent
    },
    {
        path: '', redirectTo: '/home', pathMatch: 'full'
    },
]

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
