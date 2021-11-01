import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Profile } from 'src/app/model/profileModel';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class Tab1service {

  // apiEndpoint = environment.apiEndpoint;
  // controllerName = environment.feature.profile.apiControllerName;
  // actionName = environment.feature.profile.actionName;

  constructor(private http: HttpClient,) { }
  getUserProfile() {
    // let url: string = `${this.apiEndpoint}/${this.controllerName}/${this.actionName.getProfile}`;
    const url = '/assets/mockup/data/Userprofile.json'
    return this.http.get<Profile>(url);
  }
}
