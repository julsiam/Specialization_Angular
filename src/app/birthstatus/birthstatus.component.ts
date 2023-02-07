import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Birth } from '../birth';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';
import { TokenService } from '../services/token.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-birthstatus',
  templateUrl: './birthstatus.component.html',
  styleUrls: ['./birthstatus.component.css'],
})
export class BirthstatusComponent implements OnInit {

  birthRecord: any;
  birth = new Birth();
  birth_id: any;

  constructor(private apiService: ApiService,
    private auth: AuthService,
    private router: Router,
    private url: ActivatedRoute,
    private formBuilder: FormBuilder)  {
      this.initializedForm();
     }


  initializedForm() {
    this.birthRecord = this.formBuilder.group({
      id:[''],
      sex:[''],
      fname:[''],
      mname:[''],
      lname:[''],
      birthdate:[''],
      birthplace:[''],
      idtype:[''],
      ffname:[''],
      fmname:[''],
      flname:[''],
      birth:[''],
      mfname:[''],
      mmname:[''],
      mlname:[''],
      latereg:[''],
      purpose:[''],
      phone:[''],
      status:['']
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

  onEdit(){
    this.apiService.editBirthStatus(this.birth_id, this.birthRecord.value).subscribe(
      (data:any)=> {
        alert('Status succesfully updated!'),
        this.router.navigateByUrl('/birthdata');
      },
    )
  }



  // statusUpdate() { //birth registration
  //   this.apiService.birthReg(this.birth).subscribe(res => {
  //     console.log(res),
  //       // error => this.handleError(error),

  //       this.router.navigateByUrl('/success');
  //   })
  // }
}
