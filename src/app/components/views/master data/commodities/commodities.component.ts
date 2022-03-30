import { Component, OnInit } from '@angular/core';

export interface commoditiesFeatures {
  description: string;
  commodityId: number;
  gradeOverride: boolean;
  weighed: boolean;
  unitOfMeasure: string;
  kgPerUnit: number;
}

const COMMODITIES_DATA: commoditiesFeatures[] = [
  {commodityId: 303, description: 'Soya Meal', gradeOverride: false, weighed: true, unitOfMeasure: 'Ton', kgPerUnit: 1000},
  {commodityId: 999, description: 'Soya Bran', gradeOverride: false, weighed: true, unitOfMeasure: 'Ton', kgPerUnit: 1000},
  {commodityId: 394, description: 'Full Fat Soya', gradeOverride: false, weighed: true, unitOfMeasure: 'Ton', kgPerUnit: 1000},
  {commodityId: 319, description: 'Soya Oilcake', gradeOverride: false, weighed: true, unitOfMeasure: 'Ton', kgPerUnit: 1000},
  {commodityId: 336, description: 'White Maize Imported', gradeOverride: false, weighed: true, unitOfMeasure: 'Ton', kgPerUnit: 1000},
  {commodityId: 342, description: 'Yellow Maize', gradeOverride: false, weighed: true, unitOfMeasure: 'Ton', kgPerUnit: 1000},
  {commodityId: 356, description: 'Yellow Maize Imported', gradeOverride: false, weighed: true, unitOfMeasure: 'Ton', kgPerUnit: 1000},
  {commodityId: 371, description: 'Yellow maize (out Mill)', gradeOverride: false, weighed: true, unitOfMeasure: 'Ton', kgPerUnit: 1000},
  {commodityId: 372, description: 'White Maize GMO Free', gradeOverride: false, weighed: true, unitOfMeasure: 'Ton', kgPerUnit: 1000},
  {commodityId: 379, description: 'Soya', gradeOverride: false, weighed: true, unitOfMeasure: 'Ton', kgPerUnit: 1000},
];


@Component({
  selector: 'app-commodities',
  templateUrl: './commodities.component.html',
  styleUrls: ['./commodities.component.css']
})
export class CommoditiesComponent implements OnInit {
  displayedColumns: string[] = ['commodityId', 'description', 'gradeOverride', 'weighed', 'unitOfMeasure', 'kgPerUnit'];
  dataSource = COMMODITIES_DATA;

  ngOnInit(): void {
  }

}
