import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RecoveryData } from '../../models/recoveryData';

@Injectable({
  providedIn: 'root'
})

export class RecoveryService {

  recoveryAccount(recoveryData: RecoveryData): Observable<boolean> {
    //TODO: Add api call to recover email or username when API is available
    console.warn(`UserName or email: ${recoveryData.user}`);
    return of(true);
  }
}

