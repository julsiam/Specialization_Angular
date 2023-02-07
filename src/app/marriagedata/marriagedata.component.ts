import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-marriagedata',
  templateUrl: './marriagedata.component.html',
  styleUrls: ['./marriagedata.component.css']
})
export class MarriagedataComponent {
  marriageRecord: any;

  constructor(private apiService: ApiService) { }


  ngOnInit(): void {
    this.getBirthData();
  }

  getBirthData() {
    this.apiService.getMarriageData().subscribe(res => {
      this.marriageRecord = res;
    });

  }
}
