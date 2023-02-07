import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarriagepreviewComponent } from './marriagepreview.component';

describe('MarriagepreviewComponent', () => {
  let component: MarriagepreviewComponent;
  let fixture: ComponentFixture<MarriagepreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarriagepreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarriagepreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
