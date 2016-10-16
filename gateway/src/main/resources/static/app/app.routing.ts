import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { UserManagementComponent } from './user-management/user-management.component';

const appRoutes: Routes = [
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'user-management', component: UserManagementComponent
    },
    {
        path: '', redirectTo: '/home', pathMatch: 'full'
    },
]

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
