import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Asset } from 'src/app/features/components/new-asset-modal/model/asset';
import { assetListMok } from '../../../moks/assetList.mok';
import { Move } from 'src/app/features/components/new-asset-modal/model/moves';
import { recentMoveListMok } from 'src/app/features/moks/recentMoveList.mok';

@Injectable({
  providedIn: 'root'
})

export class DiaryService {

  getAssetList(userId: number): Observable<Asset[]> {
    //TODO: Add api call to get Asset when API is available
    console.warn(`${userId} is available`);
    return of(assetListMok);
  }

  getRecentMoveList(userId: number): Observable<Move[]> {
    //TODO: Add api call to get Asset when API is available
    console.warn(`${userId} is available`);
    return of(recentMoveListMok);
  }

  saveAsset(asset: Asset): Observable<boolean> {
    //TODO: Add api call to get genral data when API is available
    console.warn(`Name: ${asset.name}`);
    return of(true);
}

}

