import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { UserService }    from '../shared/user.service';
import { HomeComponent }  from './home.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        HomeComponent,
    ],
    providers: [
        UserService
    ]
})
export class HomeModule { }
