import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { TokenService } from '../services/token.service';


@Component({
  selector: 'app-succespage',
  templateUrl: './succespage.component.html',
  styleUrls: ['./succespage.component.css']
})
export class SuccespageComponent {
  public loggedIn: boolean = false;

  constructor(private auth: AuthService, private router:Router, private tokenService:TokenService) { }


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
