import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnersrequestComponent } from './partnersrequest.component';

describe('PartnersrequestComponent', () => {
  let component: PartnersrequestComponent;
  let fixture: ComponentFixture<PartnersrequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnersrequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartnersrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
