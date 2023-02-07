import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-partnerregistration',
  templateUrl: './partnerregistration.component.html',
  styleUrls: ['./partnerregistration.component.css']
})
export class PartnerregistrationComponent {

  constructor(private apiService: ApiService, private auth: AuthService, private router:Router, private tokenService:TokenService) { }

  public loggedIn: boolean = false;

  public error: any = [];

  public partnersForm = {
    companyname: null,
    email: null,
    companyaddress: null,
    companyurl: null,
    password: null,
    cpassword: null
  }



  companySignup() {
    //console.log(this.partnersForm);
    this.apiService.signUpAgency(this.partnersForm).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error),
    );
  }

  handleResponse(data: any) {
    alert('Registered Successfully!')
    this.router.navigateByUrl('/partnershome');
  }

  registerComp() {
    return this.companySignup();
  }

  handleError(error: any) {
    this.error = error.error.errors;
  }


  ngOnInit(): void {
    this.auth.authStatus.subscribe(
      value => {
        this.loggedIn = value;
      }
    )
  }

  logout(event:MouseEvent){
    event.preventDefault();
    this.tokenService.remove();
    this.auth.changeAuthStatus(false);
    this.router.navigateByUrl('');
  }
}
