import { Component, OnInit } from '@angular/core';
import {multi} from './data'
import { NgChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-progessbar',
  templateUrl: './progessbar.component.html',
  styleUrls: ['./progessbar.component.css']
})
export class ProgessbarComponent implements OnInit {



  ngOnInit(): void {
  }
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

}
