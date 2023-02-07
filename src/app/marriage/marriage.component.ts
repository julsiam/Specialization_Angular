import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Marriage } from '../marriage';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-marriage',
  templateUrl: './marriage.component.html',
  styleUrls: ['./marriage.component.css']
})
export class MarriageComponent {

  public loggedIn: boolean = false;
  public error: any = [];
  record: any;
  marriage=new Marriage();

  constructor(private apiService: ApiService, private auth: AuthService, private router: Router, private tokenService: TokenService) { }


  marriageReg() { //birth registration
    this.apiService.marriageReg(this.marriage).subscribe(res => {
      console.log(res),
        // error => this.handleError(error),

        this.router.navigateByUrl('/success');
    })
  }

  submitform() {
    return this.marriageReg();
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
