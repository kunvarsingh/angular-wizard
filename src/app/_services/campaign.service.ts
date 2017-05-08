import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Campaign } from '../_models/index';

@Injectable()

export class CampaignService {
    baseurl: any;
    constructor(private http: Http) { 
        this.baseurl = 'http://server.localhostsro.sk:19030';
    }

    getCampaigns() {
        return this.http.get(this.baseurl+'/campaign/all').map(
            (response: Response) => response.json());
    }
    saveCampaign(campaign: Campaign) {
        return this.http.post(this.baseurl+'/campaign/save',campaign).map(
            (response: Response) => response.json());
    }
    getCampaignByUuid(uuid: string) {
        return this.http.get(this.baseurl+'/campaign/' + uuid).map(
            (response: Response) => response.json());
    }

    SendMails(uuid: string) {
        let url = this.baseurl+'/campaign/sendEmails/'+uuid;
        return this.http.post(url,uuid).map(
            (response: Response) => response.json());
    }

  
}