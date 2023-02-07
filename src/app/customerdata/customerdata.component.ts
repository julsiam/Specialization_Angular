import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-customerdata',
  templateUrl: './customerdata.component.html',
  styleUrls: ['./customerdata.component.css']
})
export class CustomerdataComponent {

  constructor(private apiService: ApiService) { }

  customerRecord:any;

  ngOnInit(): void {
    this.getCustomersData();
  }

  getCustomersData() {
    this.apiService.getCustomers(this.customerRecord).subscribe(res => {
      this.customerRecord = res;
    });

  }
}
