import { Links } from './links';

export class User {

    constructor (
        public username: string = null,
        public password: string = null,
        public _links: Links = null,
    ) { }
}
