import { Component, OnInit, ViewChild } from '@angular/core';
import graphdata from "../../assets/db.json";

import { Chart } from 'chart.js';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  title="chart";
  constructor() { 
   
  }

  ngOnInit()  {
    
  }

  canvas: any;
  ctx: any;
  @ViewChild('mychart') mychart:any;

  ngAfterViewInit() {
    this.canvas = this.mychart.nativeElement; 
    this.ctx = this.canvas.getContext('2d');

    new Chart(this.ctx, {
      type: 'line',
      data: {
          datasets: [{
              label: 'Logins',
              data:graphdata[0].data,
             // data:[100, 200,250,300,300,200, 200,250,300,400,3000, 1800,2100,1800,3000,1800,2100,1800,2800, 1800,2100,1200,3000,1800,2100,1800],
              backgroundColor: "rgb(115 185 243 / 65%)",
              borderColor: "#007ee7",
              fill: true,
          }
        ],
        labels:graphdata[0].labels,
          //labels: ['4 April','8 April','12 April','16 April','20 April','24 April','28 April','1 May','4 May','8 May','12 May','16 May','20 May','24 May','28 May','1 June','4 June','8 June','12 June','16 June','20 June','24 June','28 June','1 July','4 July','8 July']
      },
  });
  }

}
