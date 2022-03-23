import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockByTransactionTypeComponent } from './stock-by-transaction-type.component';

describe('StockByTransactionTypeComponent', () => {
  let component: StockByTransactionTypeComponent;
  let fixture: ComponentFixture<StockByTransactionTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockByTransactionTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockByTransactionTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
