import { Component, OnInit  } from '@angular/core';
import { CustomerService } from './_services/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[CustomerService]
})
export class AppComponent  implements OnInit{
  users: any = [];
  customers: any;
  constructor(private customerService:CustomerService) {
     
    this.customers = [{"email": "test@gmail.com"},
                      {"email": "abc@gmail.com"},
                      {"email": "demo@gmail.com"},
                      {"email": "testing@gmail.com"},
                      {"email": "comp@gmail.com"}];
  }
    ngOnInit() {
        this.loadAllUsers();
    }
  step2: any = {
    showNext: true,
    showPrev: true
  };

  step3: any = {
    showSecret: false
  };

  data: any = {
    email: ''
  };

  isCompleted: boolean = false;

  

  onStep1Next(event) {
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
   private loadAllUsers() {
     console.log("I am hitting before services");
     this.customerService.getAll().subscribe(users => { this.users = users; console.log(this.users); });
        // console.log("I am hitting after services"+this.users);
    }
}
