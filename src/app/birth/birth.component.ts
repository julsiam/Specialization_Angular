import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Birth } from '../birth';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-birth',
  templateUrl: './birth.component.html',
  styleUrls: ['./birth.component.css']
})
export class BirthComponent {
  public loggedIn: boolean = false;

  public error: any = [];
  record:any;
  birth=new Birth();

  constructor(private apiService: ApiService, private auth: AuthService, private router:Router, private tokenService:TokenService) { }

  // birthReg(){ //birth registration
  //   this.apiService.birthReg(this.birth).subscribe(res=>{
  //     console.log(res),

  //   })
  // }

  birthReg(){ //birth registration
    this.apiService.birthReg(this.birth).subscribe(res => {
      console.log(res),
      // error => this.handleError(error),

      this.router.navigateByUrl('/success');
    })
  }

  handleResponse(data: any) {
    alert('Registration Successfully!')
    this.router.navigateByUrl('/success')
  }

  submitform(){
    return this.birthReg();
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
