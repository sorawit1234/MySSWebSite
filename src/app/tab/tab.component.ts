import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ImageslideService } from '../shareService/slideService/imageslide-service.service';
import { ConfigServiceService } from '../shareService/config-Service/config-service.service';
import { Tab1service } from '../service/tab1Service/tab1.service';
import { Observable } from 'rxjs';
import { Profile } from '../model/profileModel';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css'],
  providers: [ImageslideService, HttpClient]
})
export class TabComponent implements OnInit {
  // <setDataType>
  today!: Date;
  getToday!: Date;
  dataprofile!: Observable<Profile>
  imagesEducation!: any[];
  imagesWorkexp!: any[];
  imagesdata!: [];
  slideConfig!: any;
  profileLinkImg: any;
  displayName!: string;
  displayEducation!: string;
  noteditmode!: boolean;
  dataprofileformgroup!: FormGroup;
  like!: number;
  labelclass!: string;
  inputclass!: string;
  setEnableDraf!: boolean;

  constructor(
    private imageslideService: ImageslideService,
    private configServiceService: ConfigServiceService,
    private tabService: Tab1service,
  ) {
    this.dataprofileformgroup = new FormGroup({
      id: new FormControl(null, null),
      name: new FormControl(null, null),
      lastName: new FormControl(null, null),
      weigth: new FormControl(null, null),
      tall: new FormControl(null, null),
      profileImg: new FormControl(null, null),
      createBy: new FormControl(null, null),
      createDate: new FormControl(null, null),
      updateby: new FormControl(null, null),
      updateDate: new FormControl(null, null),
    })
    this.imagesEducation = [];
    this.imagesWorkexp = [];
    this.imagesdata = [];
    this.like = 0;
    this.labelclass = 'label';
    this.inputclass = 'input-form form-control'
    this.noteditmode = true;
  }

  ngOnInit(): void {
    this.setUpSlide();

  }

  setUpSlide() {
    this.setSlideImage();
    this.setupConfigSlide();
    this.setupDataProfile();
  }

  setSlideImage() {
    this.setSlideEdu();
    this.setSlideWorkExp();


  }
  setSlideEdu() {
    this.imageslideService.GetImageimagesEducation().subscribe(res => {
      this.imagesEducation = res
    })
  }
  setSlideWorkExp() {
    this.imageslideService.GetImageimagesWorkexp().subscribe(res => {
      this.imagesWorkexp = res
    })
  }

  setupConfigSlide() {
    this.slideConfig = this.configServiceService.setConfigSlide();
  }

  setupDataProfile() {
    this.tabService.getUserProfile().subscribe(res => {
      this.dataprofileformgroup.patchValue(res)
      this.setupDisplayDataProfile();
    })
  }

  setupDisplayDataProfile() {
    console.log(this.dataprofileformgroup.value)
    this.displayName = this.dataprofileformgroup.get('name')?.value + " " + this.dataprofileformgroup.get('lastName')?.value;
  }
  OpenEditMode() {
    this.labelclass = 'label-edit';
    this.inputclass = 'input-edit form-control'
    this.noteditmode = false;
    this.setEnableDraf = true;
  }
  OpenNormalMode() {
    this.labelclass = 'label';
    this.inputclass = 'input-form form-control'
    this.noteditmode = true;
    this.setEnableDraf = false;
  }
  getProfileLinkImg(condition: string) {
    if (condition == '#profile') {
      this.profileLinkImg = this.dataprofileformgroup.get('profileImg')?.value;
      return this.profileLinkImg
    }
    ///test
    return 0;
  }
  checkLike(condition: string) {
    console.log('aa')
    if (condition == '#like') {
      this.like++
    } else {
      if (this.like > 0) {
        this.like--
      }



    }


  }

}
