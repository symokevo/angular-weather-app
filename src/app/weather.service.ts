import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Weather } from './weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl = 'https://api.openweathermap.org/data/2.5/';
  private apiKey = '1bbc96dd87a9ec6ff16648b6a47203c6';

  constructor(private http: HttpClient) {  }

  getWeather(city: string): Observable<Weather> {
    const options = new HttpParams()
    .set('units', 'metric')
    .set('q', city)
    .set('appId', this.apiKey);
    return this.http.get<Weather>(this.apiUrl + 'Weather', { params: options });
  }
}
