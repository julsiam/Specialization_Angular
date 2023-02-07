import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-staffsignin',
  templateUrl: './staffsignin.component.html',
  styleUrls: ['./staffsignin.component.css']
})
export class StaffsigninComponent {
  active = 4;
  public loggedIn: boolean = false;

  public form = {
    email: null,
    password: null
  }

  constructor(private apiService: ApiService, private tokenService: TokenService, private router: Router, private auth: AuthService) { }

  public error = null;

  signIn() {
    // console.log(this.form);
    return this.apiService.staffSignin(this.form).subscribe(
      // data=>console.log(data),
      data => this.handleResponse(data),
      error => this.handleError(error)

    );
  }

  handleResponse(data: any) {
    console.log(data.token);
    this.tokenService.handle(data.token)
    this.auth.changeAuthStatus(true);
    alert('Login Successfully!')
    this.router.navigateByUrl('/staffhome');
  }

  handleError(error: any) {
    this.error = error.error.error;
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
