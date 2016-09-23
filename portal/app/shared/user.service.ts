import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';

import { User } from './user';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

    constructor (
        private http: Http
    ) { }

    private url = 'http://localhost:8080/user-service/user'

    getAllUsers(): Promise<User[]> {
        return this.http.get(this.url)
            .toPromise()
            .then(this.extraData)
            .catch(this.handleError);
    }

    private extraData(response: Response) {
        return response.json()._embedded['user'];
    }

    private handleError (error: any) {
        let msg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'unknown error';
        console.error(msg); // log to console instead
        return Promise.reject(msg);
    }
}
