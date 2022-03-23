import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockByBinComponent } from './stock-by-bin.component';

describe('StockByBinComponent', () => {
  let component: StockByBinComponent;
  let fixture: ComponentFixture<StockByBinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockByBinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockByBinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
