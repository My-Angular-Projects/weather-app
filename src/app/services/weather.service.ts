import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IWeather } from '../types';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private readonly http = inject(HttpClient);

  public getWeather(city: string): Observable<IWeather> {
    const url = `${environment.API_URL}weather`;
    const params = new HttpParams()
      .set('units', 'metric')
      .set('q', city)
      .set('id', environment.API_KEY);

    return this.http.get<IWeather>(url, { params });
  }
}
