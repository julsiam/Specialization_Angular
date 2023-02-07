import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-customersignup',
  templateUrl: './customersignup.component.html',
  styleUrls: ['./customersignup.component.css']
})
export class CustomersignupComponent {
  active = 2;

  constructor(private apiService: ApiService, private router: Router, private auth: AuthService,private tokenService:TokenService) { }

  public loggedIn: boolean = false;

  public error: any = [];

  public form = {
    fname: null,
    lname: null,
    email: null,
    password: null,
    cpassword: null
  }


  signUpmethod() {
    //console.log(this.form);
    this.apiService.signUp(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error),
    );
  }

  handleResponse(data: any) {
    alert('Registration Successfully!')
    this.router.navigateByUrl('/customersignin');
  }

  signUp() {
    return this.signUpmethod();
    // alert('Registered Succesfully! You can proceed to login')
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

  logout(event: MouseEvent) {
    event.preventDefault();
    this.tokenService.remove();
    this.auth.changeAuthStatus(false);
    this.router.navigateByUrl('');
  }

}
