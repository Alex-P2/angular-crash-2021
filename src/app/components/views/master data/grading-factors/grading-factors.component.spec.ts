import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradingFactorsComponent } from './grading-factors.component';

describe('GradingFactorsComponent', () => {
  let component: GradingFactorsComponent;
  let fixture: ComponentFixture<GradingFactorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradingFactorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GradingFactorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
