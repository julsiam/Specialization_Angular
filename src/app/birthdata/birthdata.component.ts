import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-birthdata',
  templateUrl: './birthdata.component.html',
  styleUrls: ['./birthdata.component.css']
})
export class BirthdataComponent {


  birthRecord: any;

  constructor(private apiService: ApiService) { }


  ngOnInit(): void {
    this.getBirthData();
  }

  getBirthData() {
    this.apiService.getBirthData().subscribe(res => {
      this.birthRecord = res;
    });

  }
}


