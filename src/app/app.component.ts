import { Component, OnInit } from '@angular/core';
import { CustomerService, CampaignService} from './_services/index';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[CustomerService,CampaignService]
})
export class AppComponent  implements OnInit{
  // Intializations
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
  isSelected: boolean = false;
  // constructor
  constructor(private customerService:CustomerService,
   private campaignService:CampaignService) {

    this.customers = [];
  }

  ngOnInit() {
      this.loadAllCustomers();
  }

  onStep1Next(event) {
    this.campCustomer = this.customers.filter(data => data.isChecked == true);
  }
  isSelectedCustomer(){
    this.campCustomer = this.customers.filter(data => data.isChecked == true);
    if(this.campCustomer.length == 0){
      this.isSelected = false;
    }else{
       this.isSelected = true;
    }
  }
  onStep2Next(event) {
  }

  onStep3Next(event) {
  }

  onComplete(event) {
    this.isCompleted = true;
  }
  onStepChanged(step) {
  }
  // Save customer
  saveCustomer(customer) {
    //Check if email already exists
    let isExists = this.customers.filter((data) => data.email == customer.email).length > 0;
    if(!isExists){
      this.customerService.saveCustomer(customer)
              .subscribe(
                  data => {
                     

                  },
                  error => {
                  });
      this.customer = {}; 
      this.loadAllCustomers();
    }
    else{
      // Change message
      // this.alertService.success("Already exists");
    }
  }
  // to push customers in array as per selection
  saveCampaignCustomer(customer){
    this.campCustomer.push({customer: customer});
  }
  // to save campaign
  saveCampaign(campaign) {
    campaign.campaignCustomers = this.campCustomer;
    this.campaignService.saveCampaign(campaign)
            .subscribe(
                data => {
                  this.uuid = data.uuid;
                },
                error => {
                });
    this.campaign ={};
  }
  // to upload file
  selectFile($event): void {
    var inputValue = $event.target;
    this.campaignService.uploadFile(inputValue.files[0],this.uuid)
            .subscribe(
                data => {
                },
                error => {
                });
  }
  // to send mail
  sendmail(){
    this.campaignService.SendMails(this.uuid)
            .subscribe(
                data => {
                  this.campCustomer = [];
                },
                error => {
                });
  }
  // to load customers
  private loadAllCustomers() {
    this.customerService.getCustomers().subscribe(customers => { 
      customers.forEach(data => data.isChecked = false);
      this.customers = customers; 
    });
  }
}
