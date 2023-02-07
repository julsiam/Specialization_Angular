import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnershomeComponent } from './partnershome.component';

describe('PartnershomeComponent', () => {
  let component: PartnershomeComponent;
  let fixture: ComponentFixture<PartnershomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnershomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartnershomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
