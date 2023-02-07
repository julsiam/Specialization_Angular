import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Birth } from '../birth';
import { ApiService } from '../services/api.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-birthpreview',
  templateUrl: './birthpreview.component.html',
  styleUrls: ['./birthpreview.component.css']
})
export class BirthpreviewComponent {

  birthRecord: any;
  birth = new Birth();
  birth_id: any;

  constructor(private apiService: ApiService,
    private url: ActivatedRoute,
    private formBuilder: FormBuilder) {
    this.initializedForm();
  }

  initializedForm() {
    this.birthRecord = this.formBuilder.group({
      id: [''],
      sex: [''],
      fname: [''],
      mname: [''],
      lname: [''],
      birthdate: [''],
      birthplace: [''],
      idtype: [''],
      ffname: [''],
      fmname: [''],
      flname: [''],
      birth: [''],
      mfname: [''],
      mmname: [''],
      mlname: [''],
      latereg: [''],
      purpose: [''],
      phone: [''],
      status: ['']
    });
  }


  ngOnInit(): void {
    this.birth_id = this.url.snapshot.params.id;
    if (this.birth_id > 0) {
      this.apiService.getBirth(this.birth_id).subscribe((
        (data:any)=> {
         //console.log(data);
         this.birthRecord.patchValue(data);
        }
      ))
    }
    //console.log(this.birth_id)

  }

}
