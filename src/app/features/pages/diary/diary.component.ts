import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { LocalStorageData } from 'src/app/core/models/localStorageData';
import { Asset } from '../../components/new-asset-modal/model/asset';
import { DiaryService } from './services/diary.service';
import { Move } from '../../components/new-asset-modal/model/moves';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.scss']
})
export class DiaryComponent implements OnInit {
  public modalRef: BsModalRef = {} as BsModalRef;
  public storedLocalStorageData: LocalStorageData = new LocalStorageData();
  public assetList: Asset[] = [];
  public recentMoveList: Move[] = [];
  constructor(
    private modalService: BsModalService,
    private diaryService: DiaryService
  ) {}

  ngOnInit(): void {
    this.diaryService.getAssetList(this.storedLocalStorageData.userProfile.userId).subscribe((assetList) => {
      this.assetList = assetList;
    });
    this.diaryService.getRecentMoveList(this.storedLocalStorageData.userProfile.userId).subscribe((recentMoveList) => {
      this.recentMoveList = recentMoveList;
    });
  }

  public openNewAssetModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'new-asset-modal' }));
  }

  public addAsset(asset: Asset): void { 
    this.diaryService.saveAsset(asset).subscribe(() => {
      this.assetList.push(asset);
      this.closeNewAssetModal()
    });
  }

  public closeNewAssetModal(): void {
    this.modalRef.hide();
  }
}
