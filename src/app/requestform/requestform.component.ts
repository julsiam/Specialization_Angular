import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Requests } from '../requests';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';
import { TokenService } from '../services/token.service';


@Component({
  selector: 'app-requestform',
  templateUrl: './requestform.component.html',
  styleUrls: ['./requestform.component.css']
})
export class RequestformComponent {

  active=2;
  public loggedIn: boolean = false;

  public error: any = [];
  req: any;
  request = new Requests();

  constructor(private apiService: ApiService, private auth: AuthService, private router: Router, private tokenService: TokenService) { }

  certRequest() { //birth registration
    this.apiService.compRequest(this.request).subscribe(res => {
      console.log(res),
      alert('Request Sent Successfully!')
      this.router.navigateByUrl('/partnershome');
    });
  }

  handleResponse(data: any) {
    alert('Request Sent Successfully!')
    this.router.navigateByUrl('/partnershome');
  }

  submitform() {
    return this.certRequest();
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
