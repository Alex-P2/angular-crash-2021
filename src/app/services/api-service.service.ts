import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export class Commodity {
  public options_productcode: string;
  public label: string;
  public gradeoverride: string;
  public weighed: string;
  public isdeleted: string;
  public unitofmeasure: string;
  public weight: number;
  public ref: string;
  public date_modification: any;
  public array_options: Array<any>;

  constructor(
    options_productcode: string,
    label: string,
    gradeoverride: string,
    weighed: string,
    unitofmeasure: string,
    isdeleted: string,
    weight: number,
    ref: string,
    date_modification: any,
    array_options: Array<any>
  ) {
    this.options_productcode = options_productcode;
    this.label = label;
    this.gradeoverride = gradeoverride;
    this.weighed = weighed;
    this.unitofmeasure = unitofmeasure;
    this.isdeleted = isdeleted;
    this.weight = weight;
    this.ref = ref;
    this.date_modification = date_modification;
    this.array_options = array_options;
  }

}

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) {  }

  getResponse(extension: string, parameters: string, headers: HttpHeaders): Observable<any> {
    var url = `http://localhost/dolibarr/api/index.php/${extension}${parameters}&limit=9999999&pagination=true`;
    return this.http.get<any>(url, { headers: headers});
  }
}
