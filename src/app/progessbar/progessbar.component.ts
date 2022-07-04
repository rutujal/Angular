import { Component, OnInit,ViewChild } from '@angular/core';
import {multi} from './data'

//import { NgChartsModule } from 'ng2-charts';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexXAxis,
  ApexPlotOptions,
  ApexStroke,
  ApexTitleSubtitle,
  ApexYAxis,
  ApexTooltip,
  ApexFill,
  ApexLegend
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
  tooltip: ApexTooltip;
  fill: ApexFill;
  legend: ApexLegend;
};



@Component({
  selector: 'app-progessbar',
  templateUrl: './progessbar.component.html',
  styleUrls: ['./progessbar.component.css']
})
export class ProgessbarComponent implements OnInit {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

constructor(){
  this.chartOptions = {
    series: [
      {
        name: "Marine Sprite",
        data: [44, 55, 41, 37, 22, 43, 21]
      },
      {
        name: "Striking Calf",
        data: [53, 32, 33, 52, 13, 43, 32]
      },
      {
        name: "Tank Picture",
        data: [12, 17, 11, 9, 15, 11, 20]
      },
      {
        name: "Bucket Slope",
        data: [9, 7, 5, 8, 6, 9, 4]
      },
      {
        name: "Reborn Kid",
        data: [25, 12, 19, 32, 25, 24, 10]
      }
    ],
    chart: {
      type: "bar",
      height: 350,
      stacked: true
    },
    plotOptions: {
      bar: {
        horizontal: true
      }
    },
    stroke: {
      width: 1,
      colors: ["#fff"]
    },
    title: {
      text: "Fiction Books Sales"
    },
    xaxis: {
      categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
      labels: {
        formatter: function(val) {
          return val + "K";
        }
      }
    },
    yaxis: {
      title: {
        text: undefined
      }
    },
    tooltip: {
      y: {
        formatter: function(val) {
          return val + "K";
        }
      }
    },
    fill: {
      opacity: 1
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
      offsetX: 40
    }
  };
}

  ngOnInit(): void {
  }
  /*m= [
    {
      "name": "Courses",
      "series": [
        {
          "name": "Python",
          "value": 56
        },
        {
          "name": "Java",
          "value": 24
        },
        {
          "name": "C++",
          "value": 20
        },
        {
          "name": "Testing",
          "value": 10
        },
        {
          "name": "React",
          "value": 44
        }
      ]
    },
  
    
  ];
 // m=multi;
  data!: any[];
  view: any[] = [500, 50];

  // options
  showXAxis: boolean = false;
  showYAxis: boolean = false;
  gradient: boolean = false;
  showLegend: boolean = false;
  showXAxisLabel: boolean = false;
  yAxisLabel: string = '';
  showYAxisLabel: boolean = false;
  xAxisLabel: string = '';

  colorScheme = {
    domain: ['blue', 'green', 'pink','orange','purple']
  };

  constructor() {
    Object.assign(this, { multi});
  }
  onSelect(event:any) {
    console.log(event);
  }
*/



}
