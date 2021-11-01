import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTabsModule } from '@angular/material/tabs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabComponent } from './tab/tab.component';
import { Tab2Component } from './tab2/tab2.component';
import { Tab3Component } from './tab3/tab3.component';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MDCCheckbox } from '@material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SafeHtmlPipe, AppComponent1 } from './tab2/components/display/display.component';
import { CommonModule } from "@angular/common";


@NgModule({
  declarations: [
    AppComponent,
    TabComponent,
    Tab2Component,
    Tab3Component,
    HomeComponent,
    SafeHtmlPipe,
    AppComponent1,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule,
    SlickCarouselModule,
    HttpClientModule,
    NgbModule,
    MatSidenavModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,


  ],
  exports: [SafeHtmlPipe],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
