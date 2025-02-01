import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConversionRatesService {

  private apiURL = 'https://v6.exchangerate-api.com/v6/b7cc35e61cfeccf301fe4540/latest/USD';

  constructor(private http: HttpClient) { }

  getExchangeRates(): Observable<any>{
    return this.http.get<any>(this.apiURL);
  }
}
