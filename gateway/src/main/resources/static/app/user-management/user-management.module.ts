import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { UserService }    from '../shared/user.service';
import { UserManagementComponent }  from './user-management.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        UserManagementComponent,
    ],
    providers: [
        UserService
    ]
})
export class UserManagementModule { }
