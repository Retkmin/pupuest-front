import { AfterViewInit, Component, OnInit } from '@angular/core';
declare const TradingView: any;
@Component({
  selector: 'app-operative',
  templateUrl: './operative.component.html',
  styleUrls: ['./operative.component.scss']
})

export class OperativeComponent implements  OnInit, AfterViewInit {
  ngOnInit(): void {
    console.warn('Im operation page');
  }
  
  ngAfterViewInit() {
    new TradingView.widget({
      container_id: "chart",
      width: "100%",
      autosize: true,
      symbol: "BTCUSDT",
      interval: "15",
      timezone: "exchange",
      theme: "dark",
      style: "1",
      withdateranges: true,
      hide_side_toolbar: false,
      allow_symbol_change: true,
      save_image: false,
      studies: ["RSI@tv-basicstudies"],
      show_popup_button: false,
      popup_width: "1000",
      popup_height: "650",
      locale: "es"
    });
  }
}
