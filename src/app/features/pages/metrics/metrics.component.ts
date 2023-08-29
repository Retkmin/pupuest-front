import { AfterViewInit, Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-metrics',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.scss']
})
export class MetricsComponent implements  OnInit {
  
  ngOnInit(): void {
    console.warn('Im metric page');
  }
}
