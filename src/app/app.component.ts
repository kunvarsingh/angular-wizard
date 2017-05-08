import { Component, OnInit } from '@angular/core';
//import { FileUploader } from 'ng2-file-upload';
import { CustomerService, CampaignService } from './_services/index';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[CustomerService,CampaignService]
})
export class AppComponent  implements OnInit{
  users: any = [];
  customers: any;
  uuid: any;

  step2: any = {
    showNext: true,
    showPrev: true
  };
  step3: any = {
    showSecret: false
  };

  customer: any = {
    email: ''
  };
  campaign: any = {};
  campCustomer : any = [];

  isCompleted: boolean = false;
  // @ViewChild('fileInput') el:ElementRef;
  constructor(private customerService:CustomerService,
   private campaignService:CampaignService) {

    this.customers = [];
  }

  ngOnInit() {
      this.loadAllUsers();
  }

  onStep1Next(event) {
    console.log(event)
    console.log('Step1 - Next');
  }

  onStep2Next(event) {
    console.log('Step2 - Next');
  }

  onStep3Next(event) {
    console.log('Step3 - Next');
  }

  onComplete(event) {
    this.isCompleted = true;
  }

  onStepChanged(step) {
    console.log('Changed to ' + step.title);
  }

  saveCustomer(customer) {
    console.log('Customer ' + customer);
    this.customerService.saveCustomer(customer)
            .subscribe(
                data => {
                  console.log("Success",data);
                  customer = {};                    
                },
                error => {
                  // console.log("Success",error);
                });
  }
  
  saveCampaignCustomer(customer){
    console.log('campCustomer: ',customer);
    this.campCustomer.push({customer: customer});
    console.log('campCustomer: ',this.campCustomer);
  }

  saveCampaign(campaign) {
    console.log('campaign: ' + campaign);
    campaign.campaignCustomers = this.campCustomer;
    this.campaignService.saveCampaign(campaign)
            .subscribe(
                data => {
                  this.uuid = data.uuid;
                  console.log("Success",data.uuid);
                },
                error => {
                  // console.log("Success",error);
                });
  }
  
  selectFile($event): void {
    var inputValue = $event.target;
    console.log(inputValue.files[0])
    this.customerService.uploadFile(inputValue.files[0])
            .subscribe(
                data => {
                  console.log("Success",data);
                },
                error => {
                  // console.log("Success",error);
                });
  }

  sendmail(){
    console.log("uuid : ",this.uuid);
    this.campaignService.SendMails(this.uuid)
            .subscribe(
                data => {
                  console.log("Success",data);
                  this.campCustomer = [];
                },
                error => {
                  // console.log("Success",error);
                });
  }

  private loadAllUsers() {
    this.customerService.getCustomers().subscribe(customers => { 
      this.customers = customers; 
      console.log(this.customers); 
    });
  }
}
