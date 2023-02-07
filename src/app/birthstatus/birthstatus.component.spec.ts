import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthstatusComponent } from './birthstatus.component';

describe('BirthstatusComponent', () => {
  let component: BirthstatusComponent;
  let fixture: ComponentFixture<BirthstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirthstatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BirthstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
