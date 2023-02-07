import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent {
  constructor(private apiService: ApiService) { }

  partnersRecord:any;

  ngOnInit(): void {
    this.getPartners();
  }

  getPartners() {
    this.apiService.getPartners(this.partnersRecord).subscribe(res => {
      this.partnersRecord = res;
    });

  }
}
