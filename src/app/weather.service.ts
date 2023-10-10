import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Weather } from './weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl = 'https://api.openweathermap.org/data/2.5/';
  private apiKey = 'ed1850018d95fd1db736a3de24e3ae0f';

  constructor(private http: HttpClient) {  }

  getWeather(city: string): Observable<Weather> {
    const options = new HttpParams()
    .set('units', 'metric')
    .set('q', city)
    .set('appId', this.apiKey);
    return this.http.get<Weather>(this.apiUrl + 'Weather', { params: options });
  }
}
