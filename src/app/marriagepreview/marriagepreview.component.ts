import { Component } from '@angular/core';
import { Marriage } from '../marriage';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-marriagepreview',
  templateUrl: './marriagepreview.component.html',
  styleUrls: ['./marriagepreview.component.css']
})
export class MarriagepreviewComponent {
  marriageRecord: any;
  marriage = new Marriage();
  marriage_id: any;

  constructor(private apiService: ApiService,
    private url: ActivatedRoute,
    private formBuilder: FormBuilder) {
    this.initializedForm();
  }

  initializedForm() {
    this.marriageRecord = this.formBuilder.group({
      id: [''],
      sex: [''],
      fname: [''],
      mname: [''],
      lname: [''],
      birthdate: [''],
      birthplace: [''],
      idtype: [''],
      sfirstname: [''],
      smiddlename: [''],
      slastname: [''],
      marriageDate: [''],
      marriageplace: [''],
      purpose: [''],
      legalProceedings: [''],
      phone: [''],
      status: [''],
    });
  }


  ngOnInit(): void {
    this.marriage_id = this.url.snapshot.params.id;
    if (this.marriage_id > 0) {
      this.apiService.getMarriage(this.marriage_id).subscribe((
        (data: any) => {
          //console.log(data);
          this.marriageRecord.patchValue(data);
        }
      ))
    }
    //console.log(this.birth_id)

  }

}
