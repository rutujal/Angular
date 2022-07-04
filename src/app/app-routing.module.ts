import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component1Component } from './component1/component1.component'; 
import { AppComponent } from './app.component';
import { GraphComponent } from './graph/graph.component';
import { ProgessbarComponent } from './progessbar/progessbar.component';

const routes: Routes = [
  {
    path:'',
    component:AppComponent
  },
  {
    path:'courses',
    component:Component1Component
  },
  {
    path:'graph',
    component:GraphComponent
  },
  {
    path:'progess',
    component:ProgessbarComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
