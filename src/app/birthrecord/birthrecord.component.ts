import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Birth } from '../birth';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-birthrecord',
  templateUrl: './birthrecord.component.html',
  styleUrls: ['./birthrecord.component.css']
})
export class BirthrecordComponent implements OnInit {

  birthRecord: any;

  constructor(private apiService: ApiService, private router: Router) { }


  ngOnInit(): void {
    this.getBirthData();

  }

  getBirthData() {
    this.apiService.getBirthData().subscribe(res => {
      this.birthRecord = res;
    });
  }


  previewBirth(id: any) {
    this.router.navigate(['birth_preview', id]);
  }

  // updateStatus(id:string){
  //   this.allBirth.find((p)=> {
  //     return p.id===id
  //   })
  // }





}
