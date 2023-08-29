import { Component, OnInit } from '@angular/core';
import { Asset } from './model/asset';
import { HomeService } from './services/home.service';
import { UserData } from 'src/app/core/models/userData';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent  implements OnInit {
  public assetList: Asset[] = [];
  public userData: UserData = new UserData();
  constructor(
    private homeService: HomeService
  ) {}
  ngOnInit(): void {
    this.userData.userId = '1245';
    this.homeService.getAssetList(this.userData.userId).subscribe((assetList) => {
      this.assetList = assetList;
     });
  }
}
