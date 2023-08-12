import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { createChart } from 'lightweight-charts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements AfterViewInit  {
  @ViewChild('chart') chart: any;

  ngAfterViewInit() {
    createChart(this.chart);
  }

}
