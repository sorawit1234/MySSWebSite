import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigServiceService {

  constructor(private http: HttpClient,) { }
setConfigSlide() {
    const url = '/assets/mockup//config/slideConfig.json'
    return this.http.get(url);
  }
}
