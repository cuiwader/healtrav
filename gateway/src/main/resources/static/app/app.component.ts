import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './shared/user';
import { UserService } from './shared/user.service';

@Component({
    selector: 'healtrav-app',
    templateUrl: 'app/app.component.html'
})
export class AppComponent {

    username: string = null;
    password: string = null;

    constructor(
        private router: Router,
        private userService: UserService,
    ) { }

    login() {
        this.userService.login(this.username, this.password).then(
            result => {
                console.log(result);
                this.userService.getPrincipal().then(
                    principal => {
                        this.userService.principal = principal;
                        console.log(this.userService.principal);
                    },
                    error => console.error(error)
                )
                this.router.navigate(['']);
            },
            error => console.error(error)
        );
    }
}
