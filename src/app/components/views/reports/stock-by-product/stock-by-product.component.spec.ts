import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockByProductComponent } from './stock-by-product.component';

describe('StockByProductComponent', () => {
  let component: StockByProductComponent;
  let fixture: ComponentFixture<StockByProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockByProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockByProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
