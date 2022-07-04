import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { NgxChartsModule } from '@swimlane/ngx-charts';

import { Visibility } from "igniteui-angular-core";
import { AppRoutingModule } from './app-routing.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { AppComponent } from './app.component';
import { Component1Component } from './component1/component1.component';
import { GraphComponent } from './graph/graph.component';
import { ProgessbarComponent } from './progessbar/progessbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';





@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    GraphComponent,
    ProgessbarComponent,
   
  
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  //NgxChartsModule 
  NgApexchartsModule,
  BrowserAnimationsModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
