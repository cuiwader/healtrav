import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';

import { User } from './user';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

    constructor (
        private http: Http
    ) { }

    private login_url = 'http://localhost:8080/login'
    private principal_url = 'http://localhost:8080/user'
    private users_url = 'http://localhost:8080/user-service/users'

    principal: User = null;

    getAllUsers(): Promise<User[]> {
        return this.http.get(this.users_url)
            .toPromise()
            .then(function(response: Response) {
                return response.json()._embedded['users'];;
            })
            .catch(this.handleError);
    }

    getPrincipal(): Promise<User> {
        return this.http.get(this.principal_url)
            .toPromise()
            .then(function(response: Response) {
                return response.json().principal;
            })
            .catch(this.handleError);
    }

    login(username: string, password: string): Promise<string> {
        //let headers = new Headers({ authorization: 'Basic ' + btoa(user.username + ':' + user.password) });
        let auth = 'Basic ' + btoa(username + ':' + password);
        let headers = new Headers();
        headers.append('Authorization', auth);
        return this.http.get(this.login_url, { headers: headers })
            .toPromise()
            .then(function(response: Response) {
                return 'success';
            })
            .catch(this.handleError);
    }

    private handleError (error: any) {
        let msg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'unknown error';
        console.error(msg); // log to console instead
        this.principal = null;
        return Promise.reject(msg);
    }
}
