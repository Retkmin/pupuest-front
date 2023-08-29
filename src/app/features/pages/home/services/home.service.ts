import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Asset } from '../model/asset';
import { assetListMok } from '../moks/assetList.mok';

@Injectable({
  providedIn: 'root'
})

export class HomeService {

  getAssetList(userId: string): Observable<Asset[]> {
    //TODO: Add api call to get Asset when API is available
    console.warn(`${userId} is available`);
    return of(assetListMok);
  }
}

