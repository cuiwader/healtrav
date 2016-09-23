import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { User } from '../shared/user';
import { UserService } from '../shared/user.service';
import { Subscription } from 'rxjs/Subscription' ;

@Component({
    templateUrl: '/app/home/home.component.html'
})
export class HomeComponent implements OnInit, OnDestroy {

    subscription: Subscription;
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
        this.subscription.unsubscribe();
    }
}
