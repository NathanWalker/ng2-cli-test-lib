import {Injectable} from 'angular2/core';

@Injectable()
export class TestService {
    constructor() {
        console.log('test service instantiated!');
    }
}

@Injectable()
export class TestService2 {
    constructor() {
        console.log('test service 2 instantiated!');
    }
}