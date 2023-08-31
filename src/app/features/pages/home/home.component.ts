import { Component, OnInit, TemplateRef } from '@angular/core';
import { HomeService } from './services/home.service';
import { GeneralAccountData } from './model/generalAccountData';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { LocalStorageData } from 'src/app/core/models/localStorageData';
import { Asset } from '../../components/new-asset-modal/model/asset';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent  implements OnInit {
  public assetList: Asset[] = [];
  public generalAccountData: GeneralAccountData = new GeneralAccountData();
  public storedLocalStorageData: LocalStorageData = new LocalStorageData();
  public currency: string = "";
  public modalRef: BsModalRef = {} as BsModalRef;
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
    private modalService: BsModalService,
    private homeService: HomeService
  ) {}
  ngOnInit(): void {
    this.storedLocalStorageData.userProfile.userId = 1245;
    this.storedLocalStorageData.settings.currency = '$';
    this.homeService.getAssetList(this.storedLocalStorageData.userProfile.userId).subscribe((assetList) => {
      this.assetList = assetList;
    });
    this.homeService.getGeneralAccountData(this.storedLocalStorageData.userProfile.userId).subscribe((generalAccountData) => {
      this.generalAccountData = generalAccountData;
    });
  }

  public openNewAssetModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'new-asset-modal' }));
  }

  public addAsset(asset: Asset): void { 
    this.homeService.saveAsset(asset).subscribe(() => {
      this.assetList.push(asset);
      this.closeNewAssetModal()
    });
  }

  public closeNewAssetModal(): void {
    this.modalRef.hide();
  }
}
