import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


export interface ticket {
  number: number;
  type: string;
  customer: string;
  date: string;
}

const TICKET_DATA: ticket[] = [
  {number: 10020, type: 'I', customer: 'Private Limited', date: '07/06/2021'},
  {number: 21002, type: 'O', customer: 'Gilbert', date: '07/06/2021'},
  {number: 12344, type: 'W', customer: 'Hakuna', date: '07/06/2021'},
  {number: 10221, type: 'I', customer: 'TimBuck2', date: '07/06/2021'},
  {number: 10222, type: 'O', customer: 'Alex', date: '07/06/2021'},
  {number: 20131, type: 'I', customer: 'Hakuna', date: '07/06/2021'},
  {number: 15112, type: 'I', customer: 'Shipping Ltd.', date: '07/06/2021'},
  {number: 10021, type: 'I', customer: 'Xela', date: '07/06/2021'},
  {number: 10068, type: 'I', customer: 'Gilbert', date: '07/06/2021'},
  {number: 15313, type: 'I', customer: 'Gilbert', date: '07/06/2021'},
];

@Component({
  selector: 'app-transaction-entry',
  templateUrl: './transaction-entry.component.html',
  styleUrls: ['./transaction-entry.component.css']
})


export class TransactionEntryComponent implements OnInit {
  displayedColumns: string[] = ['number', 'type', 'customer', 'date'];
  dataSource = new MatTableDataSource(TICKET_DATA);

  @ViewChild(MatSort, {static: true}) sort: MatSort;


  ngOnInit(): void {
    this.dataSource.sort = this.sort;
  }

}
