import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { User } from '../shared/user';
import { UserService } from '../shared/user.service';

@Component({
    templateUrl: '/app/user-management/user-management.component.html'
})
export class UserManagementComponent implements OnInit, OnDestroy {

    users: User[];

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private userService: UserService,
    ) { }

    ngOnInit() {
        this.userService.getAllUsers().then(
            users => {
                console.log(users);
                this.users = users;
            },
            error => console.error(error)
        );
    }

    ngOnDestroy() {
    }
}
