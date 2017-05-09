import {
    Injectable
} from '@angular/core';
import {
    Http,
    Headers,
    RequestOptions,
    Response
} from '@angular/http';
import {
    Observable
} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {
    Campaign
} from '../_models/index';
import {
    AppConfig
} from '../app.config';

@Injectable()

export class CampaignService {
    baseurl: any;
    constructor(private http: Http, private config: AppConfig) {
        this.baseurl = config.apiUrl;
    }

    getCampaigns() {
        return this.http.get(this.baseurl + '/campaign/all').map(
            (response: Response) => response.json());
    }
    saveCampaign(campaign: Campaign) {
        return this.http.post(this.baseurl + '/campaign/save', campaign).map(
            (response: Response) => response.json());
    }
    getCampaignByUuid(uuid: string) {
        return this.http.get(this.baseurl + '/campaign/' + uuid).map(
            (response: Response) => response.json());
    }
    uploadFile(file: any, uuid: string) {
        const headers = new Headers({
            'Content-Type': 'multipart/form-data'
        });
        const url = this.baseurl + '/campaign/uploadTemplate/' + uuid;
        return this.http.post(url, file, {
            headers
        });
    }
    SendMails(uuid: string) {
        const url = this.baseurl + '/campaign/sendEmails/' + uuid;
        return this.http.post(url, uuid).map(
            (response: Response) => response.json());
    }
};
