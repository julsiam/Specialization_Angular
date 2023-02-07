import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarriagedataComponent } from './marriagedata.component';

describe('MarriagedataComponent', () => {
  let component: MarriagedataComponent;
  let fixture: ComponentFixture<MarriagedataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarriagedataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarriagedataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
