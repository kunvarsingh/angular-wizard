import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
//import { AppConfig } from '../app.config';
import { Customer } from '../_models/index';

@Injectable()

export class CustomerService {
    constructor(private http: Http) { 
    }

    getAll() {
        return this.http.get('http://server.localhostsro.sk:19030/customer/all').map((response: Response) => response.json());
    }
  //   private extractData(res: Response) {
  //   let body = res.json();
  //   return body.data || { };
  // }

    // getById(_id: string) {
    //     return this.http.get(this.config.apiUrl + '/users/' + _id).map(
    //         (response: Response) => response.json());
    // }

    // create(user: Customer) {
    //     return this.http.post(this.config.apiUrl + '/addloginuser', user).map(
    //         (response: Response) => response.json());
    // }

    // update(user: Customer) {
    //     return this.http.put(this.config.apiUrl + '/users/' + user._id, user);
    // }

    // delete(_id: string) {
    //     return this.http.delete(this.config.apiUrl + '/users/' + _id);
    // }

  
}