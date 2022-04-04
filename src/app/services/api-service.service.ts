import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) {  }

  dolibarr_get(extension: string, parameters: string, headers: HttpHeaders): Observable<any> {
    var url = `http://localhost/dolibarr/api/index.php/${extension}${parameters}&limit=9999999&pagination=true`;
    return this.http.get<any>(url, { headers: headers});
  }

  dolibarr_post(extension: string, parameters: string, body: JSON, headers: HttpHeaders) {
    var url = `http://localhost/dolibarr/api/index.php/${extension}${parameters}`;
    return this.http.put(url, body, {headers: headers});
  }
}
