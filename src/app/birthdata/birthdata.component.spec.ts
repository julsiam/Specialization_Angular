import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthdataComponent } from './birthdata.component';

describe('BirthdataComponent', () => {
  let component: BirthdataComponent;
  let fixture: ComponentFixture<BirthdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirthdataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BirthdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
