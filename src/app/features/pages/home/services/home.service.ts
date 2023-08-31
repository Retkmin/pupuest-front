import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { assetListMok } from '../../../moks/assetList.mok';
import { generalAccountDataMok } from '../../../moks/generalData.mok';
import { GeneralAccountData } from '../model/generalAccountData';
import { Asset } from 'src/app/features/components/new-asset-modal/model/asset';

@Injectable({
  providedIn: 'root'
})

export class HomeService {

  getAssetList(userId: number): Observable<Asset[]> {
    //TODO: Add api call to get Asset when API is available
    console.warn(`${userId} is available`);
    return of(assetListMok);
  }

  getGeneralAccountData(userId: number): Observable<GeneralAccountData> {
    //TODO: Add api call to get genral data when API is available
    console.warn(`${userId} is available`);
    return of(generalAccountDataMok);
  }
  saveAsset(asset: Asset): Observable<boolean> {
      //TODO: Add api call to get genral data when API is available
      console.warn(`Name: ${asset.name}`);
      return of(true);
  }

}

