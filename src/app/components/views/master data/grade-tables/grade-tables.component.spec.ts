import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeTablesComponent } from './grade-tables.component';

describe('GradeTablesComponent', () => {
  let component: GradeTablesComponent;
  let fixture: ComponentFixture<GradeTablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradeTablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GradeTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
