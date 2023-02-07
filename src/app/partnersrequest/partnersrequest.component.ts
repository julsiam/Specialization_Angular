import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-partnersrequest',
  templateUrl: './partnersrequest.component.html',
  styleUrls: ['./partnersrequest.component.css']
})
export class PartnersrequestComponent {

  constructor(private apiService: ApiService) { }

  partnersRequests:any;

  ngOnInit(): void {
    this.getCustomersData();
  }

  getCustomersData() {
    this.apiService.getPartnersRequest(this.partnersRequests).subscribe(res => {
      this.partnersRequests = res;
    });

  }
}

