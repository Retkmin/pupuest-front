import { AfterViewInit, Component } from '@angular/core';
declare const TradingView: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements AfterViewInit  {
  //@ViewChild('chart') chart: ElementRef | undefined;
  
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
    // this is ligthchart
    /*if (this.chart) {
      const chartOptions = {
        layout: {
          textColor: 'white',
          background: {
            type: 'solid',
            color: 'black'
          } as Background 
        },       
        grid: {
            vertLines: { color: '#444' },
            horzLines: { color: '#444' },
        },
      };
      const chart = createChart(this.chart.nativeElement, chartOptions);
    
      const candlestickSeries = chart.addCandlestickSeries({
          upColor: '#26a69a', 
          downColor: '#ef5350', 
          borderVisible: false,
          wickUpColor: '#26a69a', 
          wickDownColor: '#ef5350',
      });

      candlestickSeries.setData(chartMok);
      chart.timeScale().fitContent();
    }*/
  }

}
