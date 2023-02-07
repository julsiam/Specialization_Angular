import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffsigninComponent } from './staffsignin.component';

describe('StaffsigninComponent', () => {
  let component: StaffsigninComponent;
  let fixture: ComponentFixture<StaffsigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffsigninComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffsigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
