import { HttpHeaders } from '@angular/common/http';
import { ApiServiceService } from '../../../../services/api-service.service';
import { Commodity } from './CommodityClass';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-commodities',
  templateUrl: './commodities.component.html',
  styleUrls: ['./commodities.component.css']
})

export class CommoditiesComponent implements OnInit, AfterViewInit {
  /*displayedColumns: string[] = ['commodityCode', 'name', 'gradeOverride', 'weighed', 'unitOfMeasure', 'kgPerUnit'];*/

  displayedColumns: string[] = ['productcode', 'label', 'unitofmeasure', 'weight', 'ref', 'date_modification'/*, 'edit'*/];
  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  extention = 'products';
  parameters = '?';
  http_body: JSON;
  DOLAPIKEY = '600EBbzpoZIbscV53dr574RNgEI4UHx4';
  http_headers: HttpHeaders = new HttpHeaders({
    'DOLAPIKEY': this.DOLAPIKEY
  });
  
  commodities = Array<Commodity>();
  dataSource: MatTableDataSource<Commodity>;

  options_array: Array<any>;
  options_productcode: string;
  gradeoverride: string;
  weighed: string;
  unitofmeasure: string;
  isdeleted: string;

  constructor(private comService: ApiServiceService) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Commodity>;

  ngOnInit() {
    this.comService.dolibarr_get(this.extention, this.parameters, this.http_headers)
    .subscribe(response => {
      this.commodities = response.map(item => {
        this.options_array = item.array_options;
        this.options_productcode = this.options_array['options_productcode'];
        this.gradeoverride = this.options_array['options_gradeoverride'];
        this.weighed = this.options_array['options_weighed'];
        this.unitofmeasure = this.options_array['options_unitofmeasure'];
        this.isdeleted = this.options_array['options_isdeleted'];

        return new Commodity(
          item.id,
          this.options_productcode,
          item.label,
          this.gradeoverride,
          this.weighed,
          this.unitofmeasure,
          this.isdeleted,
          Number(item.weight),
          item.ref,
          item.date_modification,
          item.array_options,
        );
      });
      this.dataSource = new MatTableDataSource<Commodity>(this.commodities);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  
  ngAfterViewInit() {
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  updateProduct(id: string, cell_content: any) {
    console.log('update activated');
    console.warn('product id: ' + id);
    this.parameters = '/' + id;
    this.http_body = JSON.parse(`{"label":"${cell_content}"}`);
    this.comService.dolibarr_post(this.extention, this.parameters, this.http_body, this.http_headers)
    .subscribe(response => {
      console.log(response);
    });
  }
}
