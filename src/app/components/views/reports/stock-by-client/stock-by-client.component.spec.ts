import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockByClientComponent } from './stock-by-client.component';

describe('StockByClientComponent', () => {
  let component: StockByClientComponent;
  let fixture: ComponentFixture<StockByClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockByClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockByClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
