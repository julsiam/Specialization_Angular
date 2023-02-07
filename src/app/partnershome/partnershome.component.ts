import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-partnershome',
  templateUrl: './partnershome.component.html',
  styleUrls: ['./partnershome.component.css']
})
export class PartnershomeComponent {
  items = [
    {
      image: 'https://psahelpline.ph/img/blogs/psa-outlets-and-where-to-find-them/banner.jpeg',
      title: 'PSA CRS Outlets and Where to Find Them',
      description:
        'You may get a copy of your PSA birth certificate, marriage certificate, CENOMAR, or request a copy of a PSA death certificate at PSA       CRS nationwide. You can also order PSA certificate online at CCEP.ph',
    },
    {
      image: 'https://psahelpline.ph/img/blogs/a-guide-on-how-to-correct-your-gender-on-your-psa-birth-certificate/banner.jpg',
      title: 'A Guide On How To Correct Your Gender on Your PSA Birth Certificate',
      description:
        'A comprehensive guide on correcting the gender as it appers on a PSA birth certificate',
    },
    {
      image: 'https://psahelpline.ph/img/blogs/all-the-facts-you-need-to-know-about-the-psa-certificate-of-no-marriage/banner.jpg',
      title: 'All The Facts You Need To Know About The PSA Certificate of No Marriage (CENOMAR)',
      description:
        'A simplified definition of the PSA CENOMAR, how a persons changing civil status (from single, to married, to widowed, or annulled) affects it, and the two ways an individual may request for a copy',
    },
    {
      image: 'https://psahelpline.ph/img/blogs/all-you-need-to-know-about-the-psa-death-certificate/banner.jpg',
      title: 'All You Need To Know About the PSA Death Certificate',
      description:
        'This blog article explains in detail the process and importance of the timely and accurate registration of a death certificate and when the deceased next of kin may request for a copy of the PSA death certificate',
    },
  ];

  public loggedIn: boolean = false;


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

  constructor(private auth: AuthService, private router:Router, private tokenService:TokenService) { }

}
