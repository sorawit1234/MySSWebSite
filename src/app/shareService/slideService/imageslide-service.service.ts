import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ImageslideService {

  constructor(private http: HttpClient,) { }
  GetImageimagesEducation() {
    const url = '/assets/mockup/slideshow/imagesetEducation.json'
    return this.http.get<any[]>(url);
  }
  GetImageimagesWorkexp() {
    const url = '/assets/mockup/slideshow/imagesetWorkExp.json'
    return this.http.get<any[]>(url);
  }
}
