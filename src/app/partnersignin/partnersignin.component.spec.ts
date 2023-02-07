import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnersigninComponent } from './partnersignin.component';

describe('PartnersigninComponent', () => {
  let component: PartnersigninComponent;
  let fixture: ComponentFixture<PartnersigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnersigninComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartnersigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
