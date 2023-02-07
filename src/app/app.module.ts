import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { NgbModule, NgbDropdown } from '@ng-bootstrap/ng-bootstrap';
import { CustomersigninComponent } from './customersignin/customersignin.component';
import { CustomersignupComponent } from './customersignup/customersignup.component';
import { StaffsigninComponent } from './staffsignin/staffsignin.component';
import { AboutComponent } from './about/about.component';
import { PartnerregistrationComponent } from './partnerregistration/partnerregistration.component';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerhomeComponent } from './customerhome/customerhome.component';
import { BirthComponent } from './birth/birth.component';
import { SuccespageComponent } from './succespage/succespage.component';
import { StaffhomeComponent } from './staffhome/staffhome.component';
import { BirthrecordComponent } from './birthrecord/birthrecord.component';
import { PartnersigninComponent } from './partnersignin/partnersignin.component';
import { BirthdataComponent } from './birthdata/birthdata.component';
import { BirthpreviewComponent } from './birthpreview/birthpreview.component';
import { BirthstatusComponent } from './birthstatus/birthstatus.component';
import { CustomerdataComponent } from './customerdata/customerdata.component';
import { MarriageComponent } from './marriage/marriage.component';
import { CenomarComponent } from './cenomar/cenomar.component';
import { MarriagedataComponent } from './marriagedata/marriagedata.component';
import { MarriagepreviewComponent } from './marriagepreview/marriagepreview.component';
import { MarriagestatusComponent } from './marriagestatus/marriagestatus.component';
import { PartnersComponent } from './partners/partners.component';
import { PartnershomeComponent } from './partnershome/partnershome.component';
import { RequestformComponent } from './requestform/requestform.component';
import { PartnersrequestComponent } from './partnersrequest/partnersrequest.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    CustomersigninComponent,
    CustomersignupComponent,
    StaffsigninComponent,
    AboutComponent,
    PartnerregistrationComponent,
    CustomerhomeComponent,
    BirthComponent,
    SuccespageComponent,
    StaffhomeComponent,
    BirthrecordComponent,
    PartnersigninComponent,
    BirthdataComponent,
    BirthpreviewComponent,
    BirthstatusComponent,
    CustomerdataComponent,
    MarriageComponent,
    CenomarComponent,
    MarriagedataComponent,
    MarriagepreviewComponent,
    MarriagestatusComponent,
    PartnersComponent,
    PartnershomeComponent,
    RequestformComponent,
    PartnersrequestComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbDropdown,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
