import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// VIEWS
import { TransactionEntryComponent } from './components/views/master data/transaction-entry/transaction-entry.component';
// MasterData
import { CustomersComponent } from './components/views/master data/customers/customers.component';
import { CommoditiesComponent } from './components/views/master data/commodities/commodities.component';
import { GradesComponent} from './components/views/master data/grades/grades.component';
import { GradeTablesComponent } from './components/views/master data/grade-tables/grade-tables.component';
import { GradingFactorsComponent } from './components/views/master data/grading-factors/grading-factors.component';
import { FactorsComponent } from './components/views/master data/factors/factors.component';
import { BinsComponent } from './components/views/master data/bins/bins.component';
import { VehiclesComponent } from './components/views/master data/vehicles/vehicles.component';
import { SettingsComponent } from './components/views/master data/settings/settings.component';
// Reports
import { StockByClientComponent } from './components/views/reports/stock-by-client/stock-by-client.component';
import { StockByProductComponent } from './components/views/reports/stock-by-product/stock-by-product.component';
import { StockByBinComponent } from './components/views/reports/stock-by-bin/stock-by-bin.component';
import { StockByTransactionTypeComponent } from './components/views/reports/stock-by-transaction-type/stock-by-transaction-type.component';
import { TicketsComponent } from './components/views/reports/tickets/tickets.component';


const routes: Routes = [
  { path: 'transaction-entry', component:  TransactionEntryComponent},
  { path: 'customers', component: CustomersComponent },
  { path: 'commodities', component: CommoditiesComponent },
  { path: 'grades', component: GradesComponent },
  { path: 'grade-tables', component: GradeTablesComponent },
  { path: 'grading-factors', component: GradingFactorsComponent },
  { path: 'factors', component: FactorsComponent },
  { path: 'bins', component: BinsComponent },
  { path: 'vehicles', component: VehiclesComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'stock-by-client', component: StockByClientComponent },
  { path: 'stock-by-product', component: StockByProductComponent },
  { path: 'stock-by-bin', component: StockByBinComponent },
  { path: 'stock-by-transaction-type', component: StockByTransactionTypeComponent },
  { path: 'tickets', component: TicketsComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [TransactionEntryComponent]