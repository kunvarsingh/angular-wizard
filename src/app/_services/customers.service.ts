import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Customer } from '../_models/index';

@Injectable()

export class CustomerService {
    baseurl: any;

    constructor(private http: Http ) { 
        this.baseurl = 'http://server.localhostsro.sk:19030';
    }

    getCustomers() {
        return this.http.get(this.baseurl+'/customer/all').map(
            (response: Response) => response.json());
    }
    saveCustomer(customer: Customer) {
        return this.http.post(this.baseurl+'/customer/save',customer).map(
            (response: Response) => response.json());
    }
    getCustomerByUuid(uuid: string) {
        return this.http.get(this.baseurl+'/customer/' + uuid).map(
            (response: Response) => response.json());
    }
    uploadFile(file: any) {
        let headers = new Headers({
            'Content-Type': 'multipart/form-data'
        });
        
        return this.http.post(this.baseurl+'/customer/upload',file,{headers});
    }
    deleteCustomer(uuid: string) {
        return this.http.delete(this.baseurl+'/customer/' + uuid);
    }

  
}