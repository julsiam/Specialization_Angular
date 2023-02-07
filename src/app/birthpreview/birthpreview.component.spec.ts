import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthpreviewComponent } from './birthpreview.component';

describe('BirthpreviewComponent', () => {
  let component: BirthpreviewComponent;
  let fixture: ComponentFixture<BirthpreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirthpreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BirthpreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
