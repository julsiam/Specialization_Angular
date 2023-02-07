import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-staffhome',
  templateUrl: './staffhome.component.html',
  styleUrls: ['./staffhome.component.css']
})
export class StaffhomeComponent{

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
    this.router.navigateByUrl('/');
  }

  items = [
    {
      image: 'https://img.freepik.com/free-vector/organic-flat-customer-support-illustration_23-2148899174.jpg',
      title: 'Costumers',
      description:
        '',
    },
    {
      image: 'https://cdni.iconscout.com/illustration/premium/thumb/woman-filing-refund-request-3378788-2817551.png',
      title: 'Requests',
      description:
        '',
    },
    {
      image: 'https://www.convertnetwork.com/wp-content/uploads/2019/10/advertisers-hero.png',
      title: 'Partners Request',
      description:
        '',
    },
    {
      image: 'https://img.freepik.com/premium-vector/global-business-partnership-illustration_179970-146.jpg?w=2000',
      title: 'Partners',
      description:
        '',
    },
  ];
}
