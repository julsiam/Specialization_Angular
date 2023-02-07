import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerregistrationComponent } from './partnerregistration.component';

describe('PartnerregistrationComponent', () => {
  let component: PartnerregistrationComponent;
  let fixture: ComponentFixture<PartnerregistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnerregistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartnerregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
