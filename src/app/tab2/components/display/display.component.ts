import { Component, Pipe, PipeTransform, ViewChild } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Pipe({ name: "safe" })
export class SafeHtmlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer, private activeModal: NgbActiveModal) { }

  transform(value: string) {
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }
}

@Component({
  selector: "my-app",
  template: `
  <div class="modal-header">
    <h2>HTML Preview</h2>
  </div>
    <div class="modal-body">
        <div [innerHtml]="innerHtml | safe"></div>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="close()">Close</button>
    
  `
})
export class AppComponent1 {
  constructor(private activeModal: NgbActiveModal) { }
  innerHtml!: string;
  close() {
    this.activeModal.close();
  }
}
