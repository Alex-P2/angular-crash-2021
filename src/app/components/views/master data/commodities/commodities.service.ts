import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { commodity } from './commodities.component';


@Injectable({
    providedIn: 'root'
})
export class CommoditiesService {
    url = "http://localhost:80/dolibarr/api/index.php/products?sortfield=t.label&sortorder=ASC&DOLAPIKEY=600EBbzpoZIbscV53dr574RNgEI4UHx4";
    constructor(private http: HttpClient) { }
    getCommoditiesWithObservable(): Observable<any> {
        return this.http.get(this.url).pipe(
            map(this.extractData),
            catchError(this.handleErrorObservable)
        )
    }
    getCommoditiessWithPromise(): Promise<any> {
        return this.http.get(this.url).toPromise()
            .then(this.extractData)
            .catch(this.handleErrorPromise);
    }
    private extractData(res: any) {
        let body = res;
        return body;
    }
    private handleErrorObservable(error: any) {
        console.error(error.message || error);
        return throwError(error);
    }
    private handleErrorPromise(error: Response | any) {
        console.error(error.message || error);
        return Promise.reject(error.message || error);
    }
} 

