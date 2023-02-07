import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthrecordComponent } from './birthrecord.component';

describe('BirthrecordComponent', () => {
  let component: BirthrecordComponent;
  let fixture: ComponentFixture<BirthrecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirthrecordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BirthrecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
