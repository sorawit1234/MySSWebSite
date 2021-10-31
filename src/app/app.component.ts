import { Component, HostBinding } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fader ,slider} from './animation';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    fader
    // animation triggers go here
    //slider
  ]
})
export class AppComponent {
  @HostBinding('@.disabled')
  imgProfile!:string; 
  imgMainIcon!:string;
    
  public animationsDisabled = false;
  title = 'editemp';
  profileLinkImg= 'https://th.bing.com/th/id/R.05a20518e749191c457d4122a9ff14b4?rik=TVEe1rRKvh9ysQ&riu=http%3a%2f%2fimagebank.biz%2fwp-content%2fuploads%2f2014%2f08%2f163163.jpg&ehk=BKQLp2dsHN25%2bACHc7DzsVlvvMQdkDjetsm8FqaJ7KI%3d&risl=&pid=ImgRaw&r=0'
  ngOnInit(): void {
    
    
  }
  getProfileLinkImg(){
  return this.profileLinkImg;
  }
  setimageData(){

  }
  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.animation;
  }
  
  toggleAnimations() {
    this.animationsDisabled = !this.animationsDisabled;
  }
}
