import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
//import { AppConfig } from '../app.config';
import { Customer } from '../_models/index';

@Injectable()

export class CustomerService {
    constructor(private http: Http ) { 
    }

    getCustomers() {
        return this.http.get('http://server.localhostsro.sk:19030/customer/all').map(
            (response: Response) => response.json());
    }
    saveCustomer(customer: Customer) {
        return this.http.post('http://server.localhostsro.sk:19030/customer/save',customer).map(
            (response: Response) => response.json());
    }
    getCustomerByUuid(uuid: string) {
        return this.http.get('http://server.localhostsro.sk:19030/customer/' + uuid).map(
            (response: Response) => response.json());
    }
    uploadFile(file: any) {
        let headers = new Headers({
            'Content-Type': 'multipart/form-data'
        });
        
        return this.http.post('http://server.localhostsro.sk:19030/customer/upload',file,{headers});
    }
    deleteCustomer(uuid: string) {
        return this.http.delete('http://server.localhostsro.sk:19030/customer/' + uuid);
    }

  
}