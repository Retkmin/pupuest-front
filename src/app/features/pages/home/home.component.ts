import { Component, OnInit } from '@angular/core';
import { Asset } from './model/asset';
import { HomeService } from './services/home.service';
import { UserData } from 'src/app/core/models/userData';
import { GeneralAccountData } from './model/generalAccountData';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent  implements OnInit {
  public assetList: Asset[] = [];
  public generalAccountData: GeneralAccountData = new GeneralAccountData();
  public userData: UserData = new UserData();
  public currency: string = "$";
  public doughnutData  = {
    labels: [
      'Bids',
      'Ask',
    ],
    datasets: [{
      label: 'Operations Balance',
      data: [3, 7],
      backgroundColor: [
        'rgb(240, 128, 128)',
        'rgb(144, 238, 144)'
      ],
      hoverOffset: 2
    }]
  };
  public lineData = {
    labels: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'],
    datasets: [{
      label: 'Balance de cuenta',
      data: [0, 300, 200, 100, 400, 700, 600],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  }
  constructor(
    private homeService: HomeService
  ) {}
  ngOnInit(): void {
    this.userData.userId = '1245';
    this.homeService.getAssetList(this.userData.userId).subscribe((assetList) => {
      this.assetList = assetList;
    });
    this.homeService.getGeneralAccountData(this.userData.userId).subscribe((generalAccountData) => {
      this.generalAccountData = generalAccountData;
    });
  }
}
