import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
//import { AppConfig } from '../app.config';
import { Campaign } from '../_models/index';

@Injectable()

export class CampaignService {
    constructor(private http: Http) { 
    }

    getCampaigns() {
        return this.http.get('http://server.localhostsro.sk:19030/campaign/all').map(
            (response: Response) => response.json());
    }
    saveCampaign(campaign: Campaign) {
        return this.http.post('http://server.localhostsro.sk:19030/campaign/save',campaign).map(
            (response: Response) => response.json());
    }
    getCampaignByUuid(uuid: string) {
        return this.http.get('http://server.localhostsro.sk:19030/campaign/' + uuid).map(
            (response: Response) => response.json());
    }

    // update(customer: Customer) {
    //     return this.http.put('http://server.localhostsro.sk:19030/users/' + customer.uuid, customer);
    // }
    SendMails(uuid: string) {
        var url = 'http://server.localhostsro.sk:19030/campaign/sendEmails/'+uuid;
        return this.http.post(url,uuid).map(
            (response: Response) => response.json());
    }

  
}