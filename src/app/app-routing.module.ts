import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BirthComponent } from './birth/birth.component';
import { BirthdataComponent } from './birthdata/birthdata.component';
import { BirthpreviewComponent } from './birthpreview/birthpreview.component';
import { BirthrecordComponent } from './birthrecord/birthrecord.component';
import { BirthstatusComponent } from './birthstatus/birthstatus.component';
import { CustomerdataComponent } from './customerdata/customerdata.component';
import { CustomerhomeComponent } from './customerhome/customerhome.component';
import { CustomersigninComponent } from './customersignin/customersignin.component';
import { CustomersignupComponent } from './customersignup/customersignup.component';
import { LandingComponent } from './landing/landing.component';
import { MarriageComponent } from './marriage/marriage.component';
import { MarriagedataComponent } from './marriagedata/marriagedata.component';
import { MarriagepreviewComponent } from './marriagepreview/marriagepreview.component';
import { MarriagestatusComponent } from './marriagestatus/marriagestatus.component';
import { PartnerregistrationComponent } from './partnerregistration/partnerregistration.component';
import { PartnersComponent } from './partners/partners.component';
import { PartnershomeComponent } from './partnershome/partnershome.component';
import { PartnersigninComponent } from './partnersignin/partnersignin.component';
import { PartnersrequestComponent } from './partnersrequest/partnersrequest.component';
import { RequestformComponent } from './requestform/requestform.component';
import { AfterSigninService } from './services/after-signin.service';
import { BeforeSigninService } from './services/before-signin.service';
import { StaffhomeComponent } from './staffhome/staffhome.component';
import { StaffsigninComponent } from './staffsignin/staffsignin.component';
import { SuccespageComponent } from './succespage/succespage.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    canActivate: [BeforeSigninService]
  },
  {
    path: 'customersignup',
    component: CustomersignupComponent,
    canActivate: [BeforeSigninService]
  },
  {
    path: 'customersignin',
    component: CustomersigninComponent,
    canActivate: [BeforeSigninService]
  },
  {
    path: 'staffsignin',
    component: StaffsigninComponent,
    canActivate: [BeforeSigninService]
  },
  {
    path: 'about',
    component: AboutComponent,
    canActivate: [BeforeSigninService]
  },
  {
    path: 'parterregistration',
    component: PartnerregistrationComponent,
    canActivate: [BeforeSigninService]
  },
  {
    path: 'partnersignin',
    component: PartnersigninComponent,
    canActivate: [BeforeSigninService]
  },
  {
    path: 'customerhome',
    component: CustomerhomeComponent,
    canActivate: [AfterSigninService]
  },
  {
    path: 'birth_form',
    component: BirthComponent,
    canActivate: [AfterSigninService]
  },
  {
    path: 'marriage_form',
    component: MarriageComponent,
    canActivate: [AfterSigninService]
  },
  {
    path: 'success',
    component: SuccespageComponent,
    canActivate: [AfterSigninService]
  },

  {
    path: 'staffhome',
    component: StaffhomeComponent,
    canActivate: [AfterSigninService]
  },

  {
    path: 'birthdata',
    component: BirthdataComponent,
    canActivate: [AfterSigninService]
  },

  {
    path: 'birth_preview/:id',
    component: BirthpreviewComponent,
    canActivate: [AfterSigninService]
  },

  {
    path: 'update_birth_status/:id',
    component: BirthstatusComponent,
    canActivate: [AfterSigninService]
  },

  {
    path: 'marriagedata',
    component: MarriagedataComponent,
    canActivate: [AfterSigninService]
  },

  {
    path: 'marriage_preview/:id',
    component: MarriagepreviewComponent,
    canActivate: [AfterSigninService]
  },

  {
    path: 'update_marriage_status/:id',
    component: MarriagestatusComponent,
    canActivate: [AfterSigninService]
  },

  {
    path: 'customersdata',
    component: CustomerdataComponent,
    canActivate: [AfterSigninService]
  },

  {
    path: 'partners',
    component: PartnersComponent,
    canActivate: [AfterSigninService]
  },

  {
    path: 'partnersrequest',
    component: PartnersrequestComponent
  },

  {
    path: 'partnershome',
    component: PartnershomeComponent
  },

  {
    path: 'request_form',
    component: RequestformComponent
  },











];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
