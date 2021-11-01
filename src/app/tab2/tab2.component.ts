
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent1 } from './components/display/display.component';
@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.component.html',
  styleUrls: ['./tab2.component.css'],
  providers: [HttpClient]
})
export class Tab2Component implements OnInit {
  innerHtml!: string;
  tempalatel!: string;
  tempalateText!: string;
  data!: FormGroup;
  templateselect!: number;
  button!: string;
  constructor(
    private modalService: NgbModal,
  ) {
    this.data = new FormGroup({
      text: new FormControl(),
      innerHtml: new FormControl(),
      button: new FormControl(),
      tempalateText: new FormControl()
    })
  }

  ngOnInit(): void {
    this.innerHtml = '';
    this.button = '';
    this.tempalateText = '';
  }
  DisplayModal() {
    this.genTemplate();
    let optionsModal: NgbModalOptions = {
      size: "xl"
    }
    const modalRef = this.modalService.open(AppComponent1, optionsModal)
    modalRef.componentInstance.innerHtml = this.data.get('innerHtml')?.value;
    modalRef.result
      .then((data) => {
        if (this.data.get('innerHtml')?.value == 'plase select template') {
          this.clearHtml();
        }

      }, () => {


      })
  }
  setButton(condition: string, type: string) {

    if (type = 'btn') {
      this.ChooseButton(condition);
    }

  }
  ChooseButton(condition: string) {
    var tagStart = '<button type="button"'
    var classBtn = 'class="' + condition + '">'
    var tagStop = '</button>'
    var buttonBuild = tagStart + classBtn + this.data.get('text')?.value + tagStop;
    this.button = this.button + buttonBuild
    this.data.get('text')?.patchValue('');
  }
  chooseTemplate(number: number) {
    console.log(number)
    this.templateselect = number;
  }
  genTemplate() {
    console.log(this.templateselect)
    if (this.templateselect == 1) {

      this.tempalatel =
        '<div class="card" style="width: 18rem;">' +
        '<div class="card-body">' +
        '<h1 class="card-title">Card Matterial</h1>' +
        '<p class="card-text">' + this.data.get('tempalateText')?.value + '</p>' +
        this.button +
        ' </div>' +
        '</div>'
      this.data.get('innerHtml')?.patchValue(this.tempalatel);
    } else {
      this.data.get('innerHtml')?.patchValue('plase select template');
    }

  }
  clearHtml() {
    this.innerHtml = '';
    this.button = '';
    this.tempalatel = '';
    this.templateselect = 0;
    this.data.get('innerHtml')?.patchValue(this.innerHtml);
  }
}
